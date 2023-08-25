import { useState } from "react";
import Navbar from "./Navbar";
import Contact from "./Contact";
import Hero from "./Hero";
import AboutMe from "./AboutMe";
import Services from "./Services";
export default function Layout() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutMe />
        <Services />
      </main>
      <Contact />
    </>
  );
}
