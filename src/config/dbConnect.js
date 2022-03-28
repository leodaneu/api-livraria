import mongoose from "mongoose";

mongoose.connect("mongodb+srv://leodaneu:x8fvREDXnjn6uD-@livraria.iofwz.mongodb.net/livraria-node");

let db = mongoose.connection;

export default db;