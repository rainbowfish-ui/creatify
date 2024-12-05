import { en } from "@/localization/en";
import Link from "next/link";
import React from "react";

const lang = en;

const RegisterButton = () => {
  return (
    <Link
      href="#home"
      className="bg-foreground border border-foreground hover:scale-95 transition-transform text-white px-4 py-1 rounded-lg shadow-sm shadow-foreground font-semibold"
    >
      {lang.navbar.exploreButton}
    </Link>
  );
};

export default RegisterButton;
