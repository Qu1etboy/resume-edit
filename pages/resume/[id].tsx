import Container from "@/components/Container";
import ResumeComponent from "@/components/Resume";
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
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/resumes`);
  const data = await res.json();

  return {
    paths: data.map((d: any) => ({ params: { id: d._id } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const res = await fetch(
    `${process.env.NEXTAUTH_URL}/api/resume?id=${params?.id}`
  );
  const data = await res.json();

  return {
    // Passed to the page component as props
    props: { resume: data.resume },
  };
}
