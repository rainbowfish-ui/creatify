import React from "react";
import Link from "next/link";

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

const NavItems = () => {
  return (
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
  );
};

export default NavItems;
