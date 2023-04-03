import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const prisma = new PrismaClient();

  if (req.method === "GET") {
    try {
      const result = await prisma.resume.findMany();

      return res.status(200).json(result);
    } catch (err) {
      console.error(err);
      return res.status(500).send("Server error please try again");
    }
  }

  return res.status(405).send("Method not allowed.");
}
