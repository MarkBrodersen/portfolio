import { useEffect, useState } from "react";
import ServicesContainer from "../components/ServicesContainer";
// import serviceData from "../data/Services.json";
import SectionHeading from "../components/SectionHeading";
import serviceData from "../data/ServicesData";

export default function Services() {
  const [data, setData] = useState();
  useEffect(() => {
    setData(serviceData.data);
  }, []);
  return (
    <div className="py-12 w-[80%] m-auto flex flex-col text-center">
      <SectionHeading text="What can i do?" heading="Services" />
      <div className="flex flex-wrap justify-center gap-12">
        {data &&
          data.map((item) => (
            <div key={item.id}>
              <ServicesContainer data={item} />
            </div>
          ))}
      </div>
    </div>
  );
}
