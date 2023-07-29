const { MongoClient, ConnectionCreatedEvent } = require("mongodb");

const url = 'mongodb+srv://test:H7lDTLXDAApdZJC2@cluster0.rdngokz.mongodb.net/?retryWrites=true&w=majority'

const client = new MongoClient(url)

let conn;
// export let db;
try {
   conn = client.connect()
   // db = conn.db('Movies')
   console.log("connected succefully");
} catch(e) {
   console.log(e);
}

export const db = await conn.db('Movies')