import { useState } from "react";
import Navbar from "./Navbar";
import Contact from "./Contact";
import Hero from "./Hero";
import AboutMe from "./AboutMe";
export default function Layout() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutMe />
      </main>
      <Contact />
    </>
  );
}
