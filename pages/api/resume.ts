// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "@/lib/mongodb";
import CryptoJS from "crypto-js";

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

    // decrypyt resume
    const bytes = CryptoJS.AES.decrypt(
      result?.resume,
      process.env.SECRET || "secret key"
    );

    return res.status(200).json({
      ...result,
      resume: JSON.parse(bytes.toString(CryptoJS.enc.Utf8)),
    });
  }

  if (req.method === "POST") {
    const { resume, id } = req.body;

    // encrypt resume before store in db
    const encrypted = CryptoJS.AES.encrypt(
      JSON.stringify(resume),
      process.env.SECRET || "secret key"
    ).toString();

    const result = await db.collection("resumes").updateOne(
      {
        _id: id,
      },
      {
        $set: {
          resume: encrypted,
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
