import React from "react";
import Link from "next/link";

const navItems = [
  {
    name: "Home",
    route: "#home",
  },
  {
    name: "Services",
    route: "#services",
  },
  {
    name: "Benefits",
    route: "#benefits",
  },
  {
    name: "Pricing",
    route: "#pricing",
  },
  {
    name: "Links",
    route: "#footer",
  },
];

const NavItems = () => {
  return (
    <div className="flex rounded-lg h-full items-center px-6 backdrop-blur-md gap-2">
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
  );
};

export default NavItems;
