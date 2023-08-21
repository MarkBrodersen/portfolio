import { useState } from "react";
import Navbar from "./Navbar";
import Contact from "./Contact";
import Hero from "./Hero";
import AboutMe from "./AboutMe";
export default function Layout() {
  return (
    <>
      <header className="w-full h-16 bg-primary-100 flex justify-center items-center">
        <Navbar />
      </header>
      <main className="">
        <Hero />
        <AboutMe />
      </main>
      <footer>
        <Contact />
      </footer>
    </>
  );
}
