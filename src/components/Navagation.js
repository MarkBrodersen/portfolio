import { Link } from "react-router-dom";
import Feather from "feather-icons-react";

const Navagation = () => {
  return (
    <div>
      <div className="flex justify-center items-center w-screen h-12">
        <Link className="flex relative w-40 justify-center " to="/">
          {/* <Feather icon="hexagon" className="absolute top-0 left-1" /> */}
          Mark Brodersen
          {/* <Feather icon="hexagon" className="absolute top-2  right-1" /> */}
        </Link>
      </div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
    </div>
  );
};

export default Navagation;
