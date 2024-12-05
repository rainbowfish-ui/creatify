import React from "react";
import { en } from "@/components/localization/en";

const lang = en;

const LoginButton = () => {
  return (
    <button className="px-10 py-3 bg-black rounded-xl shadow-md text-white hover:scale-[.99] transition-transform">
      {lang.hero.getStartedButton}
    </button>
  );
};

export default LoginButton;
