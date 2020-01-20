import Vapor

/// Register your application's routes here.
public func routes(_ router: Router) throws {
    router.get { req in
        return "It works!"
    }

    let apiRouter = router.grouped("api")

    let showerController = ShowerController()
    apiRouter.get("showers", use: showerController.index)
    apiRouter.post("showers", Int.parameter, "book", use: showerController.book)
    apiRouter.post("showers", Int.parameter, "available", use: showerController.markAvailable)
    apiRouter.post("showers", Int.parameter, "out-of-use", use: showerController.markOutOfUse)
}

public func socketRoutes(_ socketServer: NIOWebSocketServer) throws {
    socketServer.get("echo") { ws, req in
        ws.onText { ws, text in
            print("\(text)!")
            ws.send("You sent \"\(text.trimmingCharacters(in: .newlines))\"!")
        }
    }
}
