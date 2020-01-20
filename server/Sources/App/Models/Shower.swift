import FluentSQLite
import Vapor

enum ShowerStatus: String, SQLiteEnumType {
    static func reflectDecoded() throws -> (ShowerStatus, ShowerStatus) {
        // TODO: work out why this is needed
        return (.available, .inUse)
    }

    case available = "available"
    case inUse = "inUse"
    case outOfUse = "outOfUse"
}

final class Shower: SQLiteModel {
    var id: Int?
    var name: String
    var status: ShowerStatus

    /// Creates a new `Shower`.
    init(id: Int? = nil, name: String, status: ShowerStatus) {
        self.id = id
        self.name = name
        self.status = status
    }
}

/// Allows `Shower` to be used as a dynamic migration.
extension Queuee: Migration { }

/// Allows `Shower` to be encoded to and decoded from HTTP messages.
extension Queuee: Content { }

/// Allows `Shower` to be used as a dynamic parameter in route definitions.
extension Queuee: Parameter { }

