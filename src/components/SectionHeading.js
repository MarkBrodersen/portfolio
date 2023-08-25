export default function SectionHeading({ text, heading }) {
  return (
    <div>
      <span className="mb-2 text-2xl text-primary-300">{heading}</span>
      <h2 className="mb-8 text-5xl">{text}</h2>
    </div>
  );
}
