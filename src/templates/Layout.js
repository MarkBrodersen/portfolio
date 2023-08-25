import Navbar from "./Navbar";
import Contact from "./Contact";
import Hero from "./Hero";
import AboutMe from "./AboutMe";
import Services from "./Services";
import Cases from "./Cases";
export default function Layout() {
  return (
    <>
      {/* <Navbar /> */}
      <main>
        <Hero />
        <AboutMe />
        <Services />
        {/* <Cases /> */}
      </main>
      <Contact />
    </>
  );
}
