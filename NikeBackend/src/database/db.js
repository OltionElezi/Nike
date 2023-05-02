const { MongoClient } = require("mongodb");
const uri =
  "mongodb+srv://oltionelezi17:go2UYR9XfUVpZki5@cluster0.dvnz6mb.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);

const database = client.db("test");
const products = database.collection("products");

module.exports = {
  products,
};
