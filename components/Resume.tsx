export default function Resume() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Weerawong Vonggatunyu</h1>
      <h2 className="text-lg font-semibold mb-2">Software Engineer</h2>
      <section className="mb-3 text-sm">
        <ul>
          <li>
            <span className="font-semibold">Email:</span> something@example.com
          </li>
          <li>
            <span className="font-semibold">Phone:</span> 012-345-6789
          </li>
          <li>
            <span className="font-semibold">LinkedIn:</span>{" "}
            linkedin.com/in/yourname
          </li>
          <li>
            <span className="font-semibold">Github:</span> github.com/yourname
          </li>
        </ul>
      </section>
      <section className="mb-3">
        <h1 className="text-lg font-bold border-b border-black mb-2">
          Technologies and Languague
        </h1>
        <ul className="list-disc ml-5">
          <li>Languages: JavaScript, TypeScript, Node.js, Python, C++</li>
          <li>Frameworks: React.js, Next.js,TailwindCSS, Prisma</li>
          <li>Tools: Git, GitHub, Markdown, Vercel</li>
        </ul>
      </section>
      <section className="mb-3">
        <h1 className="text-lg font-bold border-b border-black mb-2">
          Educations
        </h1>
        <h2>B.S. Computer Science, Kasetsart University GPAX: 3.93</h2>
      </section>
      <section className="mb-3">
        <h1 className="text-lg font-bold border-b border-black mb-2">
          Work Experience
        </h1>
        <div>
          <h2>Agoda</h2>
          <p>Software Engineer Intern</p>
        </div>
      </section>
      <section className="mb-3">
        <h1 className="text-lg font-bold border-b border-black mb-2">
          Projects
        </h1>
        <ul className="list-disc ml-5">
          <li>
            <span className="font-semibold">Weather App</span> - Simple weather
            app built with Next.js
          </li>
        </ul>
      </section>
      <section className="mb-3">
        <h1 className="text-lg font-bold border-b border-black mb-2">
          Interests
        </h1>
        <ul className="list-disc ml-5">
          <li>Areas: Coding, Productivity</li>
        </ul>
      </section>
    </div>
  );
}
