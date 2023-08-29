import { useRef } from "react";
import RefContext from "./context/RefContext";
import Layout from "./templates/Layout";
function App() {
  const mainRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const casesRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div>
      <RefContext.Provider
        value={{ mainRef, aboutRef, servicesRef, casesRef, contactRef }}
      >
        <Layout />
      </RefContext.Provider>
    </div>
  );
}

export default App;
