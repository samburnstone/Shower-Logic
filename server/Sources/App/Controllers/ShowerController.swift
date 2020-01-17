import Vapor

final class ShowerController {
    /// Returns a list of all `Shower`s.
    func index(_ req: Request) throws -> Future<[Shower]> {
        return Shower.query(on: req).all()
    }

    func updateStatus(_ req: Request) throws -> Future<Shower> {
        // Try and pull out the id from the request params
        let id: Int = try req.parameters.next()
        return Shower.find(id, on: req)
            // If a shower with that id wasn't found, then abort with 404
            .unwrap(or: Abort(.notFound))
            // Set the new status on the shower model with the given id
            .then { (showerToUpdate: Shower) in
                showerToUpdate.status = .inUse
                return showerToUpdate.update(on: req)
        }
    }
}

