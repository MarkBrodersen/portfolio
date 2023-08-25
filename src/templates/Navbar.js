import NavRefs from "../components/NavRefs";

export default function Navbar() {
  return (
    <header className="w-full h-16 bg-primary-100 flex justify-center items-center">
      <ul className="child:mx-4 child:text-xl flex">
        <NavRefs text="Home" shref="/#home" />
        <NavRefs text="About Me" shref="/#aboutme" />
        <NavRefs text="Services" shref="/#services" />
        <NavRefs text="Cases" shref="/#cases" />
        <NavRefs text="Contact Me" shref="/#contactme" />
      </ul>
    </header>
  );
}
