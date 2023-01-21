import Head from "next/head";
import Navbar from "@/components/home/Navbar";
import Header from "@/components/home/Header";
import Feature from "@/components/home/Feature";
import CallToAction from "@/components/home/CTA";
import Footer from "@/components/home/Footer";

export default function Home() {
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
      <main>
        <Navbar />
        <Header />
        <Feature />
        <CallToAction />
        <Footer />
      </main>
    </>
  );
}
