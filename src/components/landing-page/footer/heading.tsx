import { en } from "@/localization/en";
import Link from "next/link";
import React from "react";

const Icon = en.brand.logo;

const Heading = () => {
  return (
    <div className="w-full flex items-center justify-between">
      <Link
        href="#home"
        className="size-12 flex items-center justify-center rounded-full bg-[#fafafa] p-1 text-black transition-all hover:scale-[1.1] drop-shadow-lg"
      >
        <Icon size={20} />
      </Link>
    </div>
  );
};

export default Heading;
