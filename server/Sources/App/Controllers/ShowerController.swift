import Vapor

final class ShowerController {
    /// Returns a list of all `Shower`s.
    func index(_ req: Request) throws -> Future<[Shower]> {
        return Shower.query(on: req).all()
    }
}

