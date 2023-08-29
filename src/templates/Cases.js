import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import casesData from "../data/CasesData";
import { useEffect, useState } from "react";
import Case from "../components/Case";
import { useContext } from "react";
import RefContext from "../context/RefContext";

export default function Cases() {
  const ref = useContext(RefContext);

  const [data, setData] = useState();
  useEffect(() => {
    setData(casesData.data);
  }, []);
  return (
    <div
      ref={ref.casesRef}
      className="pb-12 w-[80%] m-auto flex flex-col text-center"
    >
      <SectionHeading text="My Case Studies" heading="Cases" />
      <div>
        {data &&
          data.map((item) => (
            <div key={item.id}>
              <Case data={item} />
            </div>
          ))}
      </div>
    </div>
  );
}
