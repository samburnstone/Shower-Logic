import FluentSQLite
import Vapor

final class Queuee: SQLiteModel {
    var id: Int?
    // If we only have optional properties, the sqlite driver seems to be unable to
    // create the entity.
    // Possibly related to https://github.com/vapor/fluent-sqlite-driver/issues/21
    // Possible fix: upgrade to Vapor 4?
    private var hack: String

    init(id: Int? = nil) {
        self.id = id
        self.hack = "HACK"
    }
}

extension Shower: Migration { }

extension Shower: Content { }

extension Shower: Parameter { }
