export default function NavLinks({ text, shref }) {
  const handleClick = () => {
    shref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <li>
      <button onClick={handleClick}>{text}</button>
    </li>
  );
}
