import Head from "next/head";
import Navbar from "@/components/home/Navbar";
import Header from "@/components/home/Header";
import Feature from "@/components/home/Feature";
import CallToAction from "@/components/home/CTA";
import Footer from "@/components/home/Footer";
import Container from "@/components/Container";

export default function Home() {
  return (
    <Container title="Resume Edit">
      <Navbar />
      <Header />
      <Feature />
      <CallToAction />
      <Footer />
    </Container>
  );
}
