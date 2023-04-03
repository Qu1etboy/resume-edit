// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import CryptoJS from "crypto-js";
import { getSession } from "next-auth/react";
import { PrismaClient } from "@prisma/client";
import { Resume } from "@/types/resume";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const prisma = new PrismaClient();

  if (req.method === "GET") {
    const { uid, id } = req.query;

    const result = await prisma.resume.findFirst({
      where: {
        OR: [
          {
            id: id as string | undefined,
          },
          {
            uid: uid as string | undefined,
          },
        ],
      },
    });

    if (result === null) {
      return res.status(200).json(result);
    }

    // // decrypyt resume
    // const bytes = CryptoJS.AES.decrypt(
    //   result?.resume,
    //   process.env.SECRET || "secret key"
    // );

    return res.status(200).json(result);
  }

  if (req.method === "POST") {
    const session = await getSession({ req });

    // Unauthorized user can't create or update a resume
    if (!session || !session.user) {
      return res.status(403).send("Unauthorized.");
    }

    const { resume }: { resume: Resume } = req.body;

    console.log(resume);

    // encrypt resume before store in db
    // const encrypted = CryptoJS.AES.encrypt(
    //   JSON.stringify(resume),
    //   process.env.SECRET || "secret key"
    // ).toString();

    const result = await prisma.resume.upsert({
      where: {
        uid: session.user.id,
      },
      update: {
        uid: session.user.id,
        data: {
          name: resume.data.name,
          job: resume.data.job,
          address: resume.data.address,
          email: resume.data.email,
          phone: resume.data.phone,
          contact: resume.data.contact,
          skill: resume.data.skill,
          education: resume.data.education,
          workExp: resume.data.workExp,
          project: resume.data.project,
          interest: resume.data.interest,
        },
      },
      create: {
        uid: session.user.id,
        data: {
          name: resume.data.name,
          job: resume.data.job,
          address: resume.data.address,
          email: resume.data.email,
          phone: resume.data.phone,
          contact: resume.data.contact,
          skill: resume.data.skill,
          education: resume.data.education,
          workExp: resume.data.workExp,
          project: resume.data.project,
          interest: resume.data.interest,
        },
      },
    });

    return res.status(201).json(result);
  }

  return res.status(405).send("Method not allowed.");
}
