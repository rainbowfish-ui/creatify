import React from "react";
import Link from "next/link";
import { en } from "@/localization/en";

const lang = en;

const NavItems = () => {
  return (
    <div className="flex rounded-lg h-full items-center px-6 backdrop-blur-md gap-2 max-md:hidden">
      {lang.navbar.navItems.map(({ name, route }) => {
        return (
          <Link
            href={route}
            className="px-2 py-1 hover:bg-gray-200 rounded-lg text-sm"
            key={`nav-${name}`}
          >
            {name}
          </Link>
        );
      })}
    </div>
  );
};

export default NavItems;
