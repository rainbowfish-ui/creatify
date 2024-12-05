import React from "react";
import { en } from "@/localization/en";

const lang = en;
const Icon = lang.brand.logo;

const Logo = () => {
  return (
    <div className="flex items-center gap-1 drop-shadow-md">
      <Icon />
      <h1 className="font-semibold">{lang.brand.name}</h1>
    </div>
  );
};

export default Logo;
