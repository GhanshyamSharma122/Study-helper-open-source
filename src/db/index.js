import mongoose from "mongoose"
import {DB_NAME} from "../constants.js"
import {MongoMemoryServer} from "mongodb-memory-server"

const dbPath = process.env.MONGO_DB_PATH || undefined
const mongoOptions = {
    instance:{
        dbName:DB_NAME,
        storageEngine:"wiredTiger"
    },
}

if (dbPath) {
    mongoOptions.instance.dbPath = dbPath
}

let mogod=await MongoMemoryServer.create(mongoOptions)
const uri=mogod.getUri();

const connectDB=async ()=>{
    try {
        const connectionInstance=await mongoose.connect(uri)
        console.log(`\n mongodb connected  db host ${connectionInstance.connection.host}`)
        
    } catch (error) {
        console.log("mongodb connection failed",error);
        process.exit(1);
    }
}
export default connectDB
