import { gsap } from "gsap";
import { HashLink } from "react-router-hash-link";

export default function NavRefs({ text, shref }) {
  // const href = "/" + shref;
  // console.log(href);

  return (
    <li>
      <HashLink to={shref}>Home</HashLink>
    </li>
  );
}
