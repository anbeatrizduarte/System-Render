import mongoose from "mongoose";

mongoose.set('strictQuery', false);

mongoose.connect(process.env.DB_CONNECT_STRING);

let db = mongoose.connection;

export default db;