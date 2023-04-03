import type {
  Contact,
  Education,
  Interest,
  Project,
  Resume,
  Skill,
  WorkExp,
} from "@/types/resume";
import RichTextRenderer from "./richtext/RichTextRenderer";

export default function Resume({ resume }: { resume: Resume }) {
  return (
    <div className="p-10 print:p-0">
      <h1 className="text-3xl font-bold">{resume.data.name}</h1>
      <h2 className="text-lg font-semibold mb-2 border-b pb-5 border-black">
        {resume.data.job}
      </h2>
      <section className="mb-3 text-sm">
        <ul className="flex flex-wrap">
          {resume.data.address && (
            <li className="mr-5">{resume.data.address}</li>
          )}
          {resume.data.email && <li className="mr-5">{resume.data.email}</li>}
          {resume.data.phone && <li className="mr-5">{resume.data.phone}</li>}
          {resume.data.contact.map((contact: Contact, idx: number) => (
            <li key={idx} className="mr-5 text-sm">
              <a
                href={`https://${contact.link.replace(/^https?:\/\//i, "")}`}
                className="underline"
              >
                {contact.label}
              </a>
            </li>
          ))}
        </ul>
      </section>
      {resume.data.skill && resume.data.skill.length > 0 && (
        <section className="mb-3">
          <h2 className="text-lg font-bold border-b border-black mb-2">
            Skills
          </h2>
          <ul className="list-disc ml-3">
            {resume.data.skill.map((skill: Skill, idx: number) => (
              <li key={idx} className="text-sm">
                {skill.skill}
              </li>
            ))}
          </ul>
        </section>
      )}
      {resume.data.education && resume.data.education.length > 0 && (
        <section className="mb-3">
          <h2 className="text-lg font-bold border-b border-black mb-2">
            Educations
          </h2>
          <ul className="list-disc ml-3">
            {resume.data.education.map((education: Education, idx: number) => (
              <li key={idx} className="text-sm">
                <h3>
                  <b className="font-bold">{education.degree}</b>,{" "}
                  {education.schoolName} {education.date}
                </h3>
                <RichTextRenderer text={education.schoolDescr} />
              </li>
            ))}
          </ul>
        </section>
      )}
      {resume.data.workExp && resume.data.workExp.length > 0 && (
        <section className="mb-3">
          <h2 className="text-lg font-bold border-b border-black mb-2">
            Work Experience
          </h2>
          {resume.data.workExp.map((workExp: WorkExp, idx: number) => (
            <div key={idx} className="mb-3">
              <div className="grid grid-cols-3 font-bold text-sm">
                <h3>{workExp.jobTitle}</h3>
                <h3 className="underline text-center">{workExp.companyName}</h3>
                <h3 className="text-right">{workExp.date}</h3>
              </div>
              <div className="ml-3 text-sm">
                <RichTextRenderer text={workExp.workDescr} />
              </div>
            </div>
          ))}
        </section>
      )}
      {resume.data.project && resume.data.project.length > 0 && (
        <section className="mb-3">
          <h2 className="text-lg font-bold border-b border-black mb-2">
            Projects
          </h2>
          <ul className="list-disc ml-5">
            {resume.data.project.map((project: Project, idx: number) => (
              <li key={idx} className="text-sm">
                <span className="font-bold">{project.projectName}</span>
                <RichTextRenderer text={project.projectDescr} />
              </li>
            ))}
          </ul>
        </section>
      )}
      {resume.data.interest && resume.data.interest.length > 0 && (
        <section className="">
          <h2 className="text-lg font-bold border-b border-black mb-2">
            Interests
          </h2>
          <ul className="list-disc ml-5 text-sm">
            {resume.data.interest.map((interest: Interest, idx: number) => (
              <li key={idx}>{interest.interest}</li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
