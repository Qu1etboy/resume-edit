import Container from "@/components/Container";
import ResumeComponent from "@/components/Resume";
import { Resume } from "@/types/resume";
import type { InferGetStaticPropsType } from "next";
import type { GetStaticPropsContext } from "next";

export default function ResumePage({
  resume,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Container title="Resume Edit" className="w-full container mx-auto">
      <ResumeComponent resume={resume} />
    </Container>
  );
}

export async function getStaticPaths() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/resumes`);
    const data: Resume[] = await res.json();

    if (!data) {
      return {
        paths: [],
        fallback: false,
      };
    }

    return {
      paths: data.map((d: any) => ({ params: { id: d.id } })),
      fallback: false,
    };
  } catch (error) {
    console.error(error);

    return {
      paths: [],
      fallback: false,
    };
  }
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/resume?id=${params?.id}`
    );
    const resume: Resume = await res.json();

    return {
      // Passed to the page component as props
      props: { resume: resume },
    };
  } catch (error) {
    console.error(error);

    return {
      notFound: true,
    };
  }
}
