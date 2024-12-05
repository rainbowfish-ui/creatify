import Link from "next/link";
import React from "react";
import { RiLeafFill } from "react-icons/ri";

const Heading = () => {
  return (
    <div className="w-full flex items-center justify-between">
      <Link
        href="#home"
        className="size-12 flex items-center justify-center rounded-full bg-[#fafafa] p-1 text-black transition-all hover:scale-[1.1] drop-shadow-lg"
      >
        <RiLeafFill size={20} />
      </Link>
    </div>
  );
};

export default Heading;
