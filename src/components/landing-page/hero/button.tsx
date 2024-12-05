import React from "react";
import { en } from "@/localization/en";
import Link from "next/link";

const lang = en;

const LoginButton = () => {
  return (
    <Link
      href="#"
      className="px-10 py-3 bg-black rounded-xl shadow-md text-white hover:scale-[.99] transition-transform max-sm:px-8 max-sm:py-2"
    >
      {lang.hero.getStartedButton}
    </Link>
  );
};

export default LoginButton;
