import { useEffect, useState } from "react";
import ServicesContainer from "../components/ServicesContainer";
import serviceData from "../data/Services.json";

export default function Services() {
  const [data, setData] = useState();
  useEffect(() => {
    setData(serviceData.data);
  }, []);
  return (
    <div className="py-12 w-[80%] m-auto flex flex-col text-center">
      <span className="mb-2 text-2xl text-primary-300">Services</span>
      <h2 className="mb-8 text-5xl">What can i do?</h2>
      <div className="flex flex-wrap justify-center gap-12">
        {data && data.map((item) => <ServicesContainer data={item} />)}
      </div>
    </div>
  );
}
