import NavRefs from "../components/NavRefs";

export default function Navbar() {
  return (
    <ul className="child:mx-4 child:text-xl flex">
      <NavRefs text="Home" ref="" />
      <NavRefs text="About Me" ref="" />
      <NavRefs text="Cases" ref="" />
      <NavRefs text="Contact Me" ref="" />
    </ul>
  );
}
