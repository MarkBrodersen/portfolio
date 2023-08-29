import { useEffect, useState } from "react";
import ServicesContainer from "../components/ServicesContainer";

import SectionHeading from "../components/SectionHeading";
import serviceData from "../data/ServicesData";
import { useContext } from "react";
import RefContext from "../context/RefContext";

export default function Services() {
  const ref = useContext(RefContext);

  const [data, setData] = useState();
  useEffect(() => {
    setData(serviceData.data);
  }, []);
  return (
    <div
      ref={ref.servicesRef}
      className="py-12 w-[80%] m-auto flex flex-col text-center"
    >
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
