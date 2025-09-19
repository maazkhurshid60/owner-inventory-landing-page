"use client"
import Head from "next/head";

import './globals.css'
import Hero from "@/components/pages/Hero";
import { useHeaderAnimation } from "@/hooks/useHeaderAnimation";


export default function Home() {
   useHeaderAnimation(); // ✅ runs GSAP animation on every page
  return (
    <>
    <div className="">
      {/* Hero Section */}
      <Hero/>
     </div>
    </>
  );
}
