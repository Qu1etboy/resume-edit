// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "@/lib/mongodb";
import CryptoJS from "crypto-js";
import { v4 as uuidv4 } from "uuid";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const client = await clientPromise;
  const db = client.db("resumes");

  if (req.method === "GET") {
    const { uid, id } = req.query;

    const result = await db.collection("resumes").findOne({
      $or: [{ uid: uid }, { _id: id }],
    });

    if (result === null) {
      return res.status(200).json(result);
    }

    if (result?.resume === undefined) {
      return res.status(200).json(result);
    }

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
    const { resume, uid, id } = req.body;

    // encrypt resume before store in db
    const encrypted = CryptoJS.AES.encrypt(
      JSON.stringify(resume),
      process.env.SECRET || "secret key"
    ).toString();

    const result = await db.collection("resumes").updateOne(
      {
        _id: id || uuidv4(),
      },
      {
        $set: {
          resume: encrypted,
          uid: uid,
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
