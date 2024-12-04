import React from "react";
import { GiFishingNet } from "react-icons/gi";

const Logo = () => {
  return (
    <div className="flex items-center gap-1 drop-shadow-md">
      <GiFishingNet size={20} />
      <h1 className="font-semibold">Rainbowfish</h1>
    </div>
  );
};

export default Logo;
