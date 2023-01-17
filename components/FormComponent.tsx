import React, { useEffect, useState } from "react";
import AddFormButton from "./AddFormButton";
import Form from "./Form";
import type { Resume } from "@/lib/types";

const resumeForm = [
  {
    label: "Contacts",
    name: "contacts",
    fields: [
      { label: "Label", name: "label", placeHolder: "e.g. GitHub" },
      { label: "Link", name: "link", placeHolder: "e.g. github.com/username" },
    ],
    value: { label: "", link: "" },
    button: "Add contact",
  },
  {
    label: "Educations",
    name: "educations",
    fields: [
      {
        label: "School Name",
        name: "schoolName",
        placeHolder: "e.g. Harvard University",
      },
      {
        label: "Description",
        name: "schoolDescr",
        placeHolder: "e.g. B.S. Computer Science",
      },
    ],
    value: { schoolName: "", schoolDescr: "" },
    button: "Add education",
  },
  {
    label: "Work Experience",
    name: "workExps",
    fields: [
      {
        label: "Company Name",
        name: "companyName",
        placeHolder: "e.g. Google",
      },
      {
        label: "Job Title",
        name: "jobTitle",
        placeHolder: "e.g. Software Engineer",
      },
      {
        label: "Description",
        name: "workDescr",
        placeHolder: "e.g. Description",
      },
    ],
    value: {
      companyName: "",
      jobTitle: "",
      workDescr: "",
    },
    button: "Add work experience",
  },
  {
    label: "Skills",
    name: "skills",
    fields: [{ label: "Skill", name: "skill", placeHolder: "e.g. JavaScript" }],
    value: { skill: "" },
    button: "Add skill",
  },
  {
    label: "Projects",
    name: "projects",
    fields: [
      {
        label: "Project Name",
        name: "projectName",
        placeHolder: "Project Name",
      },
      {
        label: "Description",
        name: "projectDescr",
        placeHolder: "Description",
      },
    ],
    value: { projectName: "", projectDescr: "" },
    button: "Add project",
  },
  {
    label: "Interests",
    name: "interests",
    fields: [
      {
        label: "Interest",
        name: "interest",
        placeHolder: "e.g. Listen to music",
      },
    ],
    value: { interest: "" },
    button: "Add interest",
  },
];

export default function FormComponent({ setParentResume }: any) {
  const [resume, setResume] = useState<Resume>({
    name: "",
    job: "",
  });

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setResume({ ...resume, [name]: value });
  };

  const handleAddForm = (e: React.MouseEvent<HTMLButtonElement>, data: any) => {
    data = { ...data, id: crypto.randomUUID() };
    setResume({
      ...resume,
      [e.currentTarget.name]: resume[e.currentTarget.name]
        ? [...resume[e.currentTarget.name], data]
        : [data],
    });
  };

  const handleChangeData = (data: any, field: string) => {
    setResume({
      ...resume,
      [field]: resume[field].map((d: any) => (d.id === data.id ? data : d)),
    });
  };

  const handleRemoveData = (dataId: string, field: string) => {
    setResume({
      ...resume,
      [field]: resume[field].filter((d: any) => d.id !== dataId),
    });
  };

  useEffect(() => {
    // sent data back to parent component
    setParentResume(resume);
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
      {resumeForm.map((form, idx) => (
        <div key={idx}>
          <h2 className="text-lg mb-3 font-bold">{form.label}</h2>
          {resume[form.name]?.map((value: any) => (
            <Form
              key={value.id}
              form={resumeForm[idx]}
              currValue={value}
              handleChangeData={handleChangeData}
              handleRemoveData={handleRemoveData}
            />
          ))}
          <AddFormButton
            text={form.button}
            name={form.name}
            handleAdd={(e: React.MouseEvent<HTMLButtonElement>) =>
              handleAddForm(e, resumeForm[idx].value)
            }
          />
        </div>
      ))}
    </form>
  );
}
