import React, { useEffect, useState } from "react";
import FormLayout from "./FormLayout";

type Resume = {
  name: string;
  job: string;
  contacts?: {
    label: string;
    link?: string;
  }[];
  skills?: {
    skill: string;
  }[];
  educations?: {
    schoolName: string;
    schoolDescr: string;
  }[];
  workExps?: {
    companyName: string;
    jobTitle: string;
    workDescr: string;
  }[];
  projects?: {
    projectName: string;
    projectDescr: string;
  }[];
  interests?: {
    interest: string;
  }[];
};

export default function FormComponent() {
  const [resume, setResume] = useState<Resume>({
    name: "",
    job: "",
  });

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setResume({ ...resume, [name]: value });
  };

  useEffect(() => {
    console.log(resume);
  }, [resume]);

  return (
    <form className="h-screen overflow-scroll p-8 flex flex-col gap-3">
      <div>
        <h2 className="text-lg mb-3 font-bold">Personal Information</h2>
        <label>Name</label>
        <input
          placeholder="e.g. John Doe"
          name="name"
          className="p-2 mb-3 border rounded-md w-full"
          onChange={handleInput}
        />
        <label>Job Title</label>
        <input
          placeholder="e.g. Software Engineer"
          name="job"
          className="p-2 mb-3 border rounded-md w-full"
          onChange={handleInput}
        />
      </div>
      <div>
        <h2 className="text-lg mb-3 font-bold">Contacts</h2>
        <ContactForm />
        <AddFieldButton text="Add contact" />
      </div>
      <div>
        <h2 className="text-lg mb-3 font-bold">Educations</h2>
        <EducationForm />
        <AddFieldButton text="Add education" />
      </div>
      <div>
        <h2 className="text-lg mb-3 font-bold">Work Exprerience</h2>
        <WorkForm />
        <AddFieldButton text="Add work" />
      </div>
      <div>
        <h2 className="text-lg mb-3 font-bold">Skills</h2>
        <SkillForm />
        <AddFieldButton text="Add skill" />
      </div>
      <div>
        <h2 className="text-lg mb-3 font-bold">Projects</h2>
        <ProjectForm />
        <AddFieldButton text="Add project" />
      </div>
      <div>
        <h2 className="text-lg mb-3 font-bold">Interests</h2>
        <InterestForm />
        <AddFieldButton text="Add interest" />
      </div>
    </form>
  );
}

function EducationForm() {
  return (
    <FormLayout>
      <div className="mt-3 mb-5 px-5">
        <label>School Name</label>
        <input
          placeholder="e.g. Harvard University"
          className="p-2 mb-3 border rounded-md w-full"
        />
        <label>Description</label>
        <textarea
          placeholder="Description"
          className="p-2 border rounded-md w-full"
        />
      </div>
    </FormLayout>
  );
}

function ContactForm() {
  return (
    <FormLayout>
      <div className="mt-3 mb-5 px-5">
        <label>Label</label>
        <input
          placeholder="e.g. GitHub"
          className="p-2 mb-3 border rounded-md w-full"
        />
        <label>Link</label>
        <input
          placeholder="e.g. github.com/username"
          className="p-2 border rounded-md w-full"
        />
      </div>
    </FormLayout>
  );
}

function SkillForm() {
  return (
    <FormLayout>
      <div className="mt-3 mb-5 px-5">
        <label>Label</label>
        <input
          placeholder="e.g. JavaScript"
          className="p-2 mb-3 border rounded-md w-full"
        />
      </div>
    </FormLayout>
  );
}

function WorkForm() {
  return (
    <FormLayout>
      <div className="mt-3 mb-5 px-5">
        <label>Company Name</label>
        <input
          placeholder="e.g. Google"
          className="p-2 mb-3 border rounded-md w-full"
        />
        <label>Job Title</label>
        <input
          placeholder="e.g. Software Engineer"
          className="p-2 mb-3 border rounded-md w-full"
        />
        <label>Description</label>
        <textarea
          placeholder="Description"
          className="p-2 border rounded-md w-full"
        />
      </div>
    </FormLayout>
  );
}

function ProjectForm() {
  return (
    <FormLayout>
      <div className="mt-3 mb-5 px-5">
        <label>Project Name</label>
        <input
          placeholder="e.g. My Portfolio Website"
          className="p-2 mb-3 border rounded-md w-full"
        />
        <label>Description</label>
        <textarea
          placeholder="Description"
          className="p-2 border rounded-md w-full"
        />
      </div>
    </FormLayout>
  );
}

function InterestForm() {
  return (
    <FormLayout>
      <div className="mt-3 mb-5 px-5">
        <label>Interest</label>
        <input
          placeholder="e.g. Listen to music"
          className="p-2 border rounded-md w-full"
        />
      </div>
    </FormLayout>
  );
}

function AddFieldButton({ text, handleAdd }: any) {
  return (
    <button
      type="button"
      className="w-full mt-5 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
    >
      {text}
    </button>
  );
}
