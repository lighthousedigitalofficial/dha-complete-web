import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const SectionBlocks = ({ img, heading, paragraph, link, reverse }) => {
  return (
    <div
  className={`grid grid-cols-1 md:grid-cols-10 p-5 gap-5 md:px-16 md:py-10 ${
    reverse ? "md:flex-row-reverse" : ""
  }`}
>
  {/* Left (or Right if reversed): Image */}
  <motion.div
    className={`col-span-7 md:col-span-4 ${reverse ? "md:order-2" : ""}`}
    initial={{ x: reverse ? 100 : -100, opacity: 0, rotate: 0 }}
    animate={{ x: 0, opacity: 1, rotate: 360 }}
    transition={{ duration: 1 }}
  >
    <img
      src={img}
      alt="img"
      className="rounded-lg w-full object-cover h-[50vh] md:h-full"
    />
  </motion.div>

  {/* Right (or Left if reversed): Text */}
  <motion.div
    className="col-span-6 flex flex-col justify-center"
    initial={{ x: reverse ? -100 : 100, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <Link to={link} className="text-xl md:text-3xl font-bold my-2">
      {heading}
    </Link>
    <p className="text-base md:text-[1rem] w-5/6 leading-relaxed text-justify">
      {paragraph}
    </p>
  </motion.div>
</div>
  );
};

export default SectionBlocks;