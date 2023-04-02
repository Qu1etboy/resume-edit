// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "@/lib/mongodb";
import CryptoJS from "crypto-js";
import { v4 as uuidv4 } from "uuid";
import { getSession } from "next-auth/react";

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

    if (result === null || result?.resume === undefined) {
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
    const session = await getSession({ req });

    // Unauthorized user can't create or update a resume
    if (!session || !session.user) {
      return res.status(403).send("Unauthorized.");
    }

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

  return res.status(405).send("Method not allowed.");
}
