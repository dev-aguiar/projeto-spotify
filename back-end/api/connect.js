import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://dbAguiar:dbAguiarPassword@cluster0.md7te.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

export const db = client.db("spotifyAula");
