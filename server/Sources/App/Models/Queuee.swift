import FluentSQLite
import Vapor

final class Queuee: SQLiteModel {
    var id: Int?
    let timestamp: TimeInterval

    init(id: Int? = nil) {
        self.id = id
        self.timestamp = Date().timeIntervalSince1970
    }
}

extension Shower: Migration { }

extension Shower: Content { }

extension Shower: Parameter { }
