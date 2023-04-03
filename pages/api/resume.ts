// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { PrismaClient } from "@prisma/client";
import { Resume } from "@/types/resume";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const prisma = new PrismaClient();

  if (req.method === "GET") {
    try {
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

      return res.status(200).json(result);
    } catch (err) {
      console.error(err);
      return res.status(500).send("Server error please try again.");
    }
  }

  if (req.method === "POST") {
    try {
      const session = await getSession({ req });

      // Unauthorized user can't create or update a resume
      if (!session || !session.user) {
        return res.status(403).send("Unauthorized.");
      }

      const { resume }: { resume: Resume } = req.body;

      console.log(resume);

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
    } catch (err) {
      console.error(err);
      return res.status(500).send("Server error please try again.");
    }
  }

  return res.status(405).send("Method not allowed.");
}
