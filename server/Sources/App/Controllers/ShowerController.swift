import Vapor

final class ShowerController {
    /// Returns a list of all `Shower`s.
    func index(_ req: Request) throws -> Future<[Shower]> {
        return Shower.query(on: req).all()
    }

    func book(_ req: Request) throws -> Future<HTTPStatus> {
       return try updateShowerStatus(to: .inUse, using: req)
    }

    func markAvailable(_ req: Request) throws -> Future<HTTPStatus> {
        return try updateShowerStatus(to: .available, using: req)
    }

    func markOutOfUse(_ req: Request) throws -> Future<HTTPStatus> {
        return try updateShowerStatus(to: .outOfUse, using: req)
    }

    private func updateShowerStatus(
        to status: ShowerStatus,
        using req: Request
    ) throws -> Future<HTTPStatus> {
        // Try and pull out the id from the request params
        let id = try req.parameters.next(Int.self)
        let shower: Future<Shower> = Shower.find(id, on: req)
            // If a shower with that id wasn't found, then abort with 404
            .unwrap(or: Abort(.notFound))

        return shower.then { (showerToUpdate: Shower) -> Future<Shower> in
            showerToUpdate.status = status
            return showerToUpdate.update(on: req)
        }
        .transform(to: .ok)
    }
}

