import Head from "next/head";
import Navbar from "@/components/landingPage/navbar/Navbar";
import Hero from "@/components/landingPage/Hero";
import Footer from "@/components/landingPage/sections/Footer";
import './globals.css'


export default function Home() {
  return (
    <>
    <div className="">
      <Head>
        <title>Owners Inventory</title>
        <meta name="description" content="Grow Faster with Smarter Inventory Tools" />
      </Head>
      {/* Navbar */}
      <Navbar/>
      <Hero/>
      <Footer/>
     </div>
    </>
  );
}
