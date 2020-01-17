import Vapor

/// Register your application's routes here.
public func routes(_ router: Router) throws {
    router.get { req in
        return "It works!"
    }

    let apiRouter = router.grouped("api")

    let showerController = ShowerController()
    apiRouter.get("showers", use: showerController.index)
}
