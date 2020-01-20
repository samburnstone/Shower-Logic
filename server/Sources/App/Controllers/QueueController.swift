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
                socket.send("CONNECTED:\(queueeId)")
                self.printQueueLength()
                self.notifyQueueCountUpdate(excludingId: queueeId)

                _ = socket.onClose.map {
                    print("Queuee \(queueeId) has left us!")
                    self.queueeToWebsocketMap.removeValue(forKey: queueeId)
                    self.printQueueLength()
                    self.notifyQueueCountUpdate(excludingId: queueeId)
                }
        }
    }

    private func printQueueLength() {
        print("Current number of queue members: ", queueLength)
    }

    private func notifyQueueCountUpdate(excludingId idToExclude: Int) {
        queueeToWebsocketMap.filter({ $0.key != idToExclude })
            .forEach { _, socket in
                socket.send("COUNT_UPDATE:\(queueLength)")
        }
    }
}
