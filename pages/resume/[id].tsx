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
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/resumes`);
    const data = await res.json();

    return {
      paths: data.map((d: any) => ({ params: { id: d._id } })),
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
    const data = await res.json();

    return {
      // Passed to the page component as props
      props: { resume: data.resume },
    };
  } catch (error) {
    console.error(error);

    return {
      notFound: true,
    };
  }
}
