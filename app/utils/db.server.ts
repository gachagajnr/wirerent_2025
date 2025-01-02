import { MongoClient, Db } from "mongodb";

let client: MongoClient;
let db: Db;

const connectToDatabase = async () => {
  if (db) return { client, db };

  const uri = process.env.CONNECTION_STRING;

  if (!uri) {
    throw new Error(
      "MongoDB connection string is missing. Please set CONNECTION_STRING in your .env file."
    );
  }

  try {
    client = new MongoClient(uri);
    await client.connect();
    db = client.db();
     return { client, db };
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
};

export { connectToDatabase };
