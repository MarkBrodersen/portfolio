export default function NavRefs({ text, ref }) {
  return (
    <li className="">
      <button className="hover:text-primary-300 hover:underline transition-colors duration-150">
        {text}
      </button>
    </li>
  );
}
