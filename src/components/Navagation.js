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
  const buttonVariants = {
    initial: {
      backgroundColor: "#ffffff",
    },
    animate: {
      backgroundColor: "#516585",
    },
  };
  const firstSpanVariants = {
    initial: {
      rotate: 0,
      marginBottom: 0,
    },
    animate: {
      rotate: 45,
      marginBottom: -8,
    },
  };
  const secoundSpanVariants = {
    initial: {
      opacity: 1,
    },
    animate: {
      opacity: 0,
    },
  };
  const thirdSpanVariants = {
    initial: {
      rotate: 0,
      marginTop: 0,
    },
    animate: {
      rotate: -45,
      marginTop: -8,
    },
  };
  return (
    <div>
      <div className="flex justify-between items-center w-screen h-12">
        <motion.button
          className="w-6 h-6 ml-3 flex flex-col justify-center items-center gap-1"
          animate={isHidden ? "animate" : "initial"}
          variants={buttonVariants}
          onClick={() => setIsHidden(!isHidden)}
        >
          <motion.span
            className="bg-slate-800 block rounded-full w-6 h-1"
            variants={firstSpanVariants}
          ></motion.span>
          <motion.span
            className="bg-slate-800 block rounded-full w-6 h-1"
            variants={secoundSpanVariants}
          ></motion.span>
          <motion.span
            className="bg-slate-800 block rounded-full w-6 h-1"
            variants={thirdSpanVariants}
          ></motion.span>
        </motion.button>
        <Link className="flex relative w-40 justify-center self-center " to="/">
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
        <div className="w-6 mr-3"></div>
      </div>

      <motion.div
        className="flex flex-col bg-slate-700 w-1/3 text-white"
        typeof="spring"
        initial={{ opacity: 0, left: -80 }}
        animate={isHidden ? { opacity: 1, left: 0 } : { opacity: 0, left: -80 }}
      >
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact mig</Link>
      </motion.div>
    </div>
  );
};

export default Navagation;
