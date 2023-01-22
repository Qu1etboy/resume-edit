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
    <div className="p-10 print:p-0">
      <h1 className="text-3xl font-bold">{resume.name}</h1>
      <h2 className="text-lg font-semibold mb-2 border-b pb-5 border-black">
        {resume.job}
      </h2>
      <section className="mb-3 text-sm">
        <ul className="flex flex-wrap">
          {resume.address && <li className="mr-5">{resume.address}</li>}
          {resume.email && <li className="mr-5">{resume.email}</li>}
          {resume.phone && <li className="mr-5">{resume.phone}</li>}
          {resume["links"]?.map((contact: Contact, idx: number) => (
            <li key={idx} className="mr-5 text-sm">
              <a
                href={`https://${contact.link?.replace(/^https?:\/\//i, "")}`}
                className="underline"
              >
                {contact.label}
              </a>
            </li>
          ))}
        </ul>
      </section>
      {resume["skills"] && resume["skills"].length > 0 && (
        <section className="mb-3">
          <h2 className="text-lg font-bold border-b border-black mb-2">
            Skills
          </h2>
          <ul className="list-disc ml-5">
            {resume["skills"]?.map((skill: Skill, idx: number) => (
              <li key={idx} className="text-sm">
                {skill.skill}
              </li>
            ))}
          </ul>
        </section>
      )}
      {resume["educations"] && resume["educations"].length > 0 && (
        <section className="mb-3">
          <h2 className="text-lg font-bold border-b border-black mb-2">
            Educations
          </h2>
          <ul className="list-disc ml-5">
            {resume["educations"]?.map((education: Education, idx: number) => (
              <li key={idx} className="text-sm">
                <h3>
                  <b className="font-semibold">{education.degree}</b>,{" "}
                  {education.schoolName} {education.date}
                </h3>
                <p>{education.schoolDescr}</p>
              </li>
            ))}
          </ul>
        </section>
      )}
      {resume["workExps"] && resume["workExps"].length > 0 && (
        <section className="mb-3">
          <h2 className="text-lg font-bold border-b border-black mb-2">
            Work Experience
          </h2>
          {resume["workExps"]?.map((workExp: WorkExp, idx: number) => (
            <div key={idx} className="mb-3">
              <div className="grid grid-cols-3 font-semibold text-sm">
                <h3>{workExp.jobTitle}</h3>
                <h3 className="underline text-center">{workExp.companyName}</h3>
                <h3 className="text-right">{workExp.date}</h3>
              </div>
              <p className="text-sm">{workExp.workDescr}</p>
            </div>
          ))}
        </section>
      )}
      {resume["projects"] && resume["projects"].length > 0 && (
        <section className="mb-3">
          <h2 className="text-lg font-bold border-b border-black mb-2">
            Projects
          </h2>
          <ul className="list-disc ml-5">
            {resume["projects"]?.map((project: Project, idx: number) => (
              <li key={idx} className="text-sm">
                <span className="font-semibold">{project.projectName}</span> -{" "}
                {project.projectDescr}
              </li>
            ))}
          </ul>
        </section>
      )}
      {resume["interests"] && resume["interests"].length > 0 && (
        <section className="">
          <h2 className="text-lg font-bold border-b border-black mb-2">
            Interests
          </h2>
          <ul className="list-disc ml-5 text-sm">
            {resume["interests"]?.map((interest: Interest, idx: number) => (
              <li key={idx}>{interest.interest}</li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
