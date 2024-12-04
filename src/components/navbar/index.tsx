import React from "react";
import NavItems from "./nav-items";
import Logo from "./logo";
import RegisterButton from "./register-button";

const Navbar = () => {
  return (
    <div className="w-full h-fit flex items-center justify-center sticky top-0 py-2">
      <div className="w-[80%] h-12 flex justify-between items-center">
        <Logo />
        <NavItems />
        <RegisterButton />
      </div>
    </div>
  );
};

export default Navbar;
