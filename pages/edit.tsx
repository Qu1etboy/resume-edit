import ResumeComponent from "@/components/Resume";
import type { Resume } from "@/lib/types";
import { useState } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";

// disable ssr on form component
const DynamicFormComponent = dynamic(
  () => import("@/components/FormComponent"),
  {
    ssr: false,
  }
);

export default function EditResume() {
  const [resume, setResume] = useState<Resume>({
    name: "",
    job: "",
  });

  return (
    <main className="flex ">
      <Head>
        <title>Resume Editor</title>
      </Head>
      <section className="w-full print:hidden">
        <DynamicFormComponent setParentResume={setResume} />
      </section>
      <section className="hidden lg:block w-full h-screen print:block print:h-full overflow-scroll p-5 border print:border-0 bg-slate-400">
        <ResumeComponent resume={resume as Resume} />
        <button
          type="button"
          className="mt-5 print:hidden text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          onClick={() => print()}
        >
          Download PDF
        </button>
      </section>
    </main>
  );
}
