import Vapor

final class QueueController {
    
    private var queueeToWebsocketMap = [Int: WebSocket]()
    private var queueLength: Int {
        return queueeToWebsocketMap.count
    }

    func subscribeToQueueUpdates(socket: WebSocket, _ req: Request) throws {
        socket.onText { socket, message in
            print("message", message)
        }

        _ = Queuee().create(on: req)
            .map { [unowned self] queue in
                guard let queueeId = queue.id else { return }
                self.queueeToWebsocketMap[queueeId] = socket
                self.printQueueLength(using: req)
                self.notifyQueueCountUpdate(using: req)

                _ = socket.onClose.map {
                    queue.delete(on: req).map(to: Void.self) { _ in
                        self.queueeToWebsocketMap.removeValue(forKey: queueeId)
                        self.printQueueLength(using: req)
                        self.notifyQueueCountUpdate(using: req)
                    }
                }
        }
    }

    private func printQueueLength(using req: Request) {
        let allQueueMembers = Queuee.query(on: req).all()
        _ = allQueueMembers.map(to: Void.self) { (queuees: [Queuee]) in
            print("Current number of queue members: ", queuees.count)
            return ()
        }
    }

    private func notifyQueueCountUpdate(using req: Request) {
        let queueByTimestamp = Queuee.query(on: req)
            .sort(\.timestamp)
            .all()

        // Notify each user of their position in the queue
        _ = queueByTimestamp.map(to: Void.self) { [unowned self] (queueItems: [Queuee]) in
            let encoder = JSONEncoder()
            for (index, queuee) in queueItems.enumerated() {
                let update = QueueUpdate(position: index + 1, length: queueItems.count)
                guard let queueeId = queuee.id else { continue }
                // send to websocket for that user
                let encodedData = try encoder.encode(update);
                self.queueeToWebsocketMap[queueeId]?.send(encodedData)
            }
        }
    }
}
