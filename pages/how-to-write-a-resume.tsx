import Footer from "@/components/home/Footer";
import Navbar from "@/components/home/Navbar";

export default function HowToWriteAResume() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <section className="container mx-auto w-full max-w-2xl p-3 lg:p-0">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-5 mt-10">
            How to write a resume
          </h1>
          <p>Learn how to write a better resume that will land you a job.</p>
          <br />
          <p>
            These are some of the best articles that provide an information you
            need to know to write a better resume, list by a job career
          </p>
        </div>

        <article className="mb-16">
          <div>
            <h3 className="text-xl font-bold">Software Engineer</h3>
            <ul className="list-disc ml-5">
              <li>
                <a
                  href="https://www.freecodecamp.org/news/writing-a-killer-software-engineering-resume-b11c91ef699d/"
                  className="underline text-teal-700"
                >
                  https://www.freecodecamp.org/news/writing-a-killer-software-engineering-resume-b11c91ef699d/
                </a>
              </li>
            </ul>
          </div>
        </article>
      </section>
      <Footer />
    </main>
  );
}
