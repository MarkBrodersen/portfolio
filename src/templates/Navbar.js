import NavLinks from "../components/NavLinks";
import { useContext } from "react";
import RefContext from "../context/RefContext";

export default function Navbar() {
  const ref = useContext(RefContext);
  const refs = {
    data: [
      {
        id: 1,
        text: "Home",
        link: ref.mainRef,
      },
      {
        id: 2,
        text: "About",
        link: ref.aboutRef,
      },
      {
        id: 3,
        text: "Services",
        link: ref.servicesRef,
      },
      {
        id: 4,
        text: "Cases",
        link: ref.casesRef,
      },
      {
        id: 5,
        text: "Contact",
        link: ref.contactRef,
      },
    ],
  };

  return (
    <header
      ref={ref.mainRef}
      className="w-full h-16 bg-primary-100 flex justify-center items-center"
    >
      <ul className="child:mx-4 child:text-xl flex">
        {refs &&
          refs.data.map((item) => (
            <div key={item.id}>
              <NavLinks text={item.text} shref={item.link} />
            </div>
          ))}
      </ul>
    </header>
  );
}
