import Vapor

/// Register your application's routes here.
public func routes(_ router: Router) throws {
    router.get { req in
        return "It works!"
    }

    let showerController = ShowerController()
    router.get("api/showers", use: showerController.index)
}
