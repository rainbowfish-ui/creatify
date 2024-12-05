import React from "react";
import Heading from "./heading";

const Footer = () => {
  return (
    <div
      className="w-full h-96 flex items-center justify-center bg-[#fafafa]"
      id="about"
    >
      <div className="w-[80%] h-full bg-black rounded-t-xl text-white">
        <Heading />
      </div>
    </div>
  );
};

export default Footer;
