import Head from "next/head";
import Navbar from "@/components/landingPage/navbar/Navbar";
import Hero from "@/components/landingPage/Hero";
import Footer from "@/components/landingPage/sections/Footer";
import './globals.css'


export default function Home() {
  return (
    <>
    <div className="">
      {/* Navbar */}
      <Navbar/>
      {/* Hero Section */}
      <Hero/>
      {/* Footer */}
      <Footer/>
     </div>
    </>
  );
}
