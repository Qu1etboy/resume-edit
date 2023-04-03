import type { NextApiRequest, NextApiResponse } from "next";
// import clientPromise from "@/lib/mongodb";
import { PrismaClient } from "@prisma/client";
// import CryptoJS from "crypto-js";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const prisma = new PrismaClient();

  if (req.method === "GET") {
    const result = await prisma.resume.findMany();

    return res.status(200).json(result);
  }

  return res.status(405).send("Method not allowed.");
}
