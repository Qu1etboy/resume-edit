// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "@/lib/mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const client = await clientPromise;
  const db = client.db("resumes");

  if (req.method === "GET") {
    const { id } = req.query;

    const result = await db.collection("resumes").findOne({
      _id: id,
    });

    return res.status(200).json(result);
  }
  if (req.method === "POST") {
    const { resume, id } = req.body;

    const result = await db.collection("resumes").updateOne(
      {
        _id: id,
      },
      {
        $set: {
          ...resume,
          _id: id,
        },
      },
      {
        upsert: true,
      }
    );

    return res.status(201).json(result);
  }

  res.status(405).send("method not allowed");
}
