import type {
  Contact,
  Education,
  Interest,
  Project,
  Resume,
  Skill,
  WorkExp,
} from "@/lib/types";

export default function Resume({ resume }: { resume: Resume }) {
  return (
    <div className="bg-white p-10 rounded-md shadow-xl print:p-0 print:shadow-none">
      <h1 className="text-3xl font-bold">{resume.name}</h1>
      <h2 className="text-lg font-semibold mb-2">{resume.job}</h2>
      <section className="mb-3 text-sm">
        <ul>
          {resume["contacts"]?.map((contact: Contact, idx: number) => (
            <li key={idx}>
              <span className="font-semibold">{contact.label}</span>
              {": "}
              {contact.link}
            </li>
          ))}
        </ul>
      </section>
      {resume["skills"] && resume["skills"].length > 0 && (
        <section className="mb-3">
          <h1 className="text-lg font-bold border-b border-black mb-2">
            Technologies and Languague
          </h1>
          <ul className="list-disc ml-5">
            {resume["skills"]?.map((skill: Skill, idx: number) => (
              <li key={idx}>{skill.skill}</li>
            ))}
          </ul>
        </section>
      )}
      {resume["educations"] && resume["educations"].length > 0 && (
        <section className="mb-3">
          <h1 className="text-lg font-bold border-b border-black mb-2">
            Educations
          </h1>
          <ul>
            {resume["educations"]?.map((education: Education, idx: number) => (
              <li key={idx}>
                {education.schoolDescr}, {education.schoolName}
              </li>
            ))}
          </ul>
        </section>
      )}
      {resume["workExps"] && resume["workExps"].length > 0 && (
        <section className="mb-3">
          <h1 className="text-lg font-bold border-b border-black mb-2">
            Work Experience
          </h1>
          {resume["workExps"]?.map((workExp: WorkExp, idx: number) => (
            <div key={idx}>
              <h2>{workExp.jobTitle}</h2>
              <h2>{workExp.workDescr}</h2>
            </div>
          ))}
        </section>
      )}
      {resume["projects"] && resume["projects"].length > 0 && (
        <section className="mb-3">
          <h1 className="text-lg font-bold border-b border-black mb-2">
            Projects
          </h1>
          <ul className="list-disc ml-5">
            {resume["projects"]?.map((project: Project, idx: number) => (
              <li key={idx}>
                <span className="font-semibold">{project.projectName}</span> -{" "}
                {project.projectDescr}
              </li>
            ))}
          </ul>
        </section>
      )}
      {resume["interests"] && resume["interests"].length > 0 && (
        <section className="">
          <h1 className="text-lg font-bold border-b border-black mb-2">
            Interests
          </h1>
          <ul className="list-disc ml-5">
            {resume["interests"]?.map((interest: Interest, idx: number) => (
              <li key={idx}>{interest.interest}</li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
