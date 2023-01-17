import ResumeComponent from "@/components/Resume";
import type { Resume } from "@/lib/types";
import { useState } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useSession } from "next-auth/react";

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

  const { data: session } = useSession();
  const [isEdit, setEdit] = useState(false);

  const handleSave = async () => {
    try {
      await fetch("http://localhost:3000/api/resume", {
        method: "POST",
        body: JSON.stringify({ resume, id: session?.user?.id }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      setEdit(false);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <main className="flex ">
      <Head>
        <title>Resume Editor</title>
      </Head>
      <section className="w-full print:hidden">
        <DynamicFormComponent setParentResume={setResume} setEdit={setEdit} />
      </section>
      <section className="hidden lg:block w-full h-screen print:block print:h-full overflow-scroll p-5 border print:border-0 bg-slate-400">
        <div>
          <button
            type="button"
            className="print:hidden text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            onClick={() => print()}
          >
            Download PDF
          </button>
          <button
            type="button"
            className="print:hidden  text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            onClick={handleSave}
          >
            Save
          </button>
          <span className="text-gray-100">
            {isEdit ? "Not Saved" : "Saved!"}
          </span>
        </div>
        <ResumeComponent resume={resume as Resume} />
      </section>
    </main>
  );
}
