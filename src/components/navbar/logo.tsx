import React from "react";
import { RiLeafFill } from "react-icons/ri";

const Logo = () => {
  return (
    <div className="flex items-center gap-1 drop-shadow-md">
      <RiLeafFill />
      <h1 className="font-semibold">Creatify</h1>
    </div>
  );
};

export default Logo;
