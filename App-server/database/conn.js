import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";

async function connect() {
    const mongoServer = await MongoMemoryServer.create();
    const mongoUri = mongoServer.getUri();

    mongoose.set('strictQuery', true);
    const db = await mongoose.connect(mongoUri);
    console.log("connected to db")
    return db;

}
export default connect;
