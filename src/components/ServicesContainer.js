import FillerText from "./sub-components/FillerText";

export default function ServicesContainer({ data }) {
  console.log(data);
  return (
    <div className="text-center w-64">
      <img
        className="rounded-2xl w-full"
        src="https://placehold.co/400x400"
        alt=""
      />
      <h2 className="text-xl my-2">{data.heading}</h2>
      <FillerText text={data.text} />
    </div>
  );
}
