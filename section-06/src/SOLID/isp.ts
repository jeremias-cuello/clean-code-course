interface Database {
    storeData(data: any): void;
}

interface RemoteDatabase {
    connect(uri: string): void;
}

class SQLDatabase implements Database, RemoteDatabase {
    connect(uri: string) {
        // connecting...
    }

    storeData(data: any) {
        // Storing data...
    }
}

class InMemoryDatabase implements Database {
    storeData(data: any) {
        // Storing data...
    }
}
