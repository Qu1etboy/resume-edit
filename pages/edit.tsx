import FormComponent from "@/components/FormComponent";
import ResumeComponent from "@/components/Resume";
import type { Resume } from "@/lib/types";
import { useState } from "react";

export default function EditResume() {
  const [resume, setResume] = useState<Resume>({
    name: "",
    job: "",
  });

  return (
    <main className="flex ">
      <section className="w-full print:hidden">
        <FormComponent setParentResume={setResume} />
      </section>
      <section className="w-full p-5 border print:border-0">
        <ResumeComponent resume={resume as Resume} />
      </section>
    </main>
  );
}
