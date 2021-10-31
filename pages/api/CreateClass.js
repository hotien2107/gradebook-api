// /api/CreateClass
// POST api/CreateClass

import { MongoClient } from "mongodb";
import NextCors from "nextjs-cors";

async function handle(req, res) {
  const url = process.env.DB_URL;

  await NextCors(req, res, {
    // Options
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "*",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });

  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(url);

    const db = client.db();

    const classCollection = db.collection("myClasses");

    await classCollection.insertOne(JSON.parse(data));

    client.close();

    res.status(201).json({ message: "Class inserted!" });
  }
}

export default handle;
