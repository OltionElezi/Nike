const { MongoClient } = require("mongodb");

const uri =
  "mongodb+srv://oltionelezi17:go2UYR9XfUVpZki5@cluster0.q36ae0s.mongodb.net/?retryWrites=true&w=majority";

let client;

const getDB = () => {
  if (!client) {
    console.log("Creating a new client!");
    client = new MongoClient(uri);
  } else {
    console.log("Reusing the old client");
  }

  const database = client.db("test");
  const products = database.collection("products");
  const orders = database.collection("orders");

  return {
    products,
    orders,
  };
};

module.exports = getDB;
