import Link from "next/link";
import React from "react";
import { RiLeafFill } from "react-icons/ri";

const Heading = () => {
  return (
    <div className="w-full px-4 pt-4 flex items-center justify-between">
      <Link
        href="#home"
        className="size-8 flex items-center justify-center rounded-full bg-[#fafafa] p-1 text-black transition-all hover:mt-1 drop-shadow-lg"
      >
        <RiLeafFill />
      </Link>
    </div>
  );
};

export default Heading;
