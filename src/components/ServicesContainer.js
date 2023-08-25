import FillerText from "./sub-components/FillerText";

export default function ServicesContainer({ data }) {
  return (
    <div className="text-center w-64">
      <img className="rounded-2xl w-72 h-auto" src={data.image} alt="" />
      <h2 className="text-xl my-2">{data.heading}</h2>
      <FillerText text={data.text} />
    </div>
  );
}
