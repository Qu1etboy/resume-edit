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
    const result = await db.collection("resumes").find().toArray();

    if (result === null) {
      return res.status(200).json(result);
    }

    return res.status(200).json(
      result.map((r) => {
        if (!r.resume) return { ...r, resume: undefined };

        const bytes = CryptoJS.AES.decrypt(
          r.resume,
          process.env.SECRET || "secret key"
        );

        return { ...r, resume: JSON.parse(bytes.toString(CryptoJS.enc.Utf8)) };
      })
    );
  }

  res.status(405).send("method not allowed");
}
