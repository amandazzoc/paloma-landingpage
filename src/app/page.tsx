'use client'
import Header from "@/components/Header";
import Identification from "@/components/Identification";
import Classes from "@/components/Classes";
import Feedback from "@/components/Feedback";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header/>
      <Identification/>
      <Classes/>
      <Feedback/>
      <Faq/>
      <Footer />
    </>
  );
}
