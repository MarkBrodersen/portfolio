/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { Link } from "react-router-dom";
import Feather from "feather-icons-react";
import { useState } from "react";
import { motion } from "framer-motion";

const Navagation = () => {
  const [isHidden, setIsHidden] = useState(false);
  const styles = {
    featherIcons: css`
      background: linear-gradient(rgb(104, 206, 237), rgb(232, 70, 154));
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    `,
  };
  return (
    <div>
      <div className="flex justify-center items-center w-screen h-12">
        <Link className="flex relative w-40 justify-center " to="/">
          <Feather
            icon="hexagon"
            css={styles.featherIcons}
            className="absolute top-0 left-1"
          />
          Mark Brodersen
          <Feather
            icon="hexagon"
            css={styles.featherIcons}
            className="absolute top-2  right-1"
          />
        </Link>
      </div>
      {isHidden ? (
        <button onClick={() => setIsHidden(false)}>
          <Feather icon="x" />
        </button>
      ) : (
        <button onClick={() => setIsHidden(true)}>
          <Feather icon="menu" />
        </button>
      )}
      {isHidden && (
        <motion.div
          className="flex flex-col"
          typeof="spring"
          initial={{ opacity: 0, left: -80 }}
          animate={{ opacity: 1, left: 0 }}
          exit={{ opacity: 0, left: -80 }}
        >
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact mig</Link>
        </motion.div>
      )}
    </div>
  );
};

export default Navagation;
