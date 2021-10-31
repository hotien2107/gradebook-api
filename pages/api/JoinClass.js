// /api/JoinClass
// POST api/JoinClass

import { MongoClient, ObjectId } from "mongodb";
import NextCors from "nextjs-cors";

async function handle(req, res) {
  const url = process.env.DB_URL;
  const id = req.body;

  await NextCors(req, res, {
    // Options
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "*",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });

  if (req.method === "POST") {
    const client = await MongoClient.connect(url);

    const db = client.db();

    const classCollection = db.collection("myClasses");

    const student = { name: "Nguyen Van A" };

    await classCollection.findOneAndUpdate(
      { _id: ObjectId(id) },
      {
        $push: {
          students: student,
        },
      }
    );

    client.close();

    res.status(201).json({ message: "Student inserted!" });
  }
}

export default handle;
