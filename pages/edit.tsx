import ResumeComponent from "@/components/Resume";
import type { Resume } from "@/lib/types";
import { useState } from "react";
import dynamic from "next/dynamic";

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
      <section className="w-full print:hidden">
        <DynamicFormComponent setParentResume={setResume} />
      </section>
      <section className="w-full h-screen overflow-scroll p-5 border print:border-0">
        <ResumeComponent resume={resume as Resume} />
      </section>
    </main>
  );
}
