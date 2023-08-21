import NavRefs from "../components/NavRefs";

export default function Navbar() {
  return (
    <ul className="child:mx-4 child:text-xl flex">
      <NavRefs text="Home" probref="" />
      <NavRefs text="About Me" probref="" />
      <NavRefs text="Cases" probref="" />
      <NavRefs text="Contact Me" probref="" />
    </ul>
  );
}
