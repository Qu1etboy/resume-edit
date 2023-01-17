import Head from "next/head";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

export default function Home() {
  const { data: session } = useSession();

  return (
    <>
      <Head>
        <title>Resume Edit</title>
        <meta
          name="description"
          content="Create your resume with ease. type in your information and download as PDF"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-full min-h-screen flex flex-col justify-center items-center gap-5">
        <h1 className="text-8xl font-extrabold text-green-600">Resume Edit</h1>
        <p className="text-lg">
          Create your resume with ease. Type in your information and download it
          as a PDF
        </p>
        {session ? (
          <>
            <Link
              type="button"
              href="/edit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Create your resume
            </Link>

            <button
              type="button"
              onClick={() => signOut()}
              className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
            >
              Sign out
            </button>
          </>
        ) : (
          <Link
            type="button"
            href="/edit"
            className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
          >
            Try it now
          </Link>
        )}
      </main>
    </>
  );
}
