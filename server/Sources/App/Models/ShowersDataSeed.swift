import Foundation
import FluentSQLite

class ShowersDataSeed: Migration {
    typealias Database = SQLiteDatabase

    static let showers = [
        Shower(id: 0, name: "Floor 1", status: .available),
        Shower(id: 1, name: "Floor 4", status: .available),
        Shower(id: 2, name: "Floor 6", status: .available)
    ]

    static func prepare(on connection: SQLiteConnection) -> EventLoopFuture<Void> {

        let futures = showers.map { shower in
            shower.create(on: connection).map(to: Void.self) { _ in return }
        }

        return EventLoopFuture<Void>.andAll(futures, eventLoop: connection.eventLoop)
    }

    static func revert(on conn: SQLiteConnection) -> EventLoopFuture<Void> {
        let futures = showers.map { shower in
            Database.delete(Shower.self, on: conn)
        }

        return EventLoopFuture<Void>.andAll(futures, eventLoop: conn.eventLoop)
    }
}
