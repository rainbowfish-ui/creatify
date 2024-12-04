import Link from "next/link";
import React from "react";
import { RiLeafFill } from "react-icons/ri";

const navItems = [
  {
    name: "How it works",
    route: "#",
  },
  {
    name: "Benefits",
    route: "#",
  },
  {
    name: "Services",
    route: "#",
  },
  {
    name: "Pricing",
    route: "#",
  },
];

const Navbar = () => {
  return (
    <div className="w-full h-fit flex items-center justify-center sticky top-0">
      <div className="w-[80%] h-12 flex justify-between items-center">
        <div className="flex items-center gap-1 drop-shadow-md">
          <RiLeafFill />
          <h1 className="font-semibold">Creatify</h1>
        </div>
        <div className="flex rounded-lg  backdrop-blur-md">
          {navItems.map(({ name, route }) => {
            return (
              <Link
                href={route}
                className="px-2 py-1 hover:bg-gray-200 rounded-lg text-sm"
              >
                {name}
              </Link>
            );
          })}
        </div>
        <button className="bg-foreground border border-foreground hover:scale-95 transition-transform text-white px-4 py-1 rounded-lg shadow-sm shadow-foreground">
          Register
        </button>
      </div>
    </div>
  );
};

export default Navbar;
