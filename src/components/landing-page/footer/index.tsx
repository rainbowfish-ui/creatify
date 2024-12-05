import React from "react";
import Heading from "./heading";
import Link from "next/link";
import { Audiowide } from "next/font/google";
import { RiLeafFill } from "react-icons/ri";

const audiowide = Audiowide({
  weight: ["400"],
  subsets: ["latin"],
});

const Footer = () => {
  return (
    <div
      className="w-full min-h-96 h-full flex items-center justify-center bg-[#FAFAFA]"
      id="footer"
    >
      <div className="w-[80%] min-h-96 h-full bg-black rounded-t-xl text-white pt-4 px-4 flex flex-col gap-6">
        <Heading />
        <div className="w-full h-fit flex items-center justify-between px-10">
          <div className="size-full flex flex-col gap-2">
            <p className="text-xl uppercase">Studio</p>
            <div>
              <p>About</p>
              <p>Work</p>
              <p>Journal</p>
              <p>Contact</p>
            </div>
          </div>
          <div className="size-full flex flex-col gap-2">
            <p className="text-xl uppercase">Socials</p>
            <div>
              <Link
                href=""
                className="block hover:underline hover:text-foreground w-fit"
              >
                Twitter
              </Link>
              <Link
                href=""
                className="block hover:underline hover:text-foreground w-fit"
              >
                Youtube
              </Link>
              <Link
                href=""
                className="block hover:underline hover:text-foreground w-fit"
              >
                Instagram
              </Link>
              <Link
                href=""
                className="block hover:underline hover:text-foreground w-fit"
              >
                Linkedin
              </Link>
            </div>
          </div>
          <div className="size-full flex flex-col gap-2">
            <p className="text-xl uppercase">Studio</p>
            <div>
              <p>Airborne Studio</p>
              <p>Department of innovation,</p>
              <p>Leeds 13SN 1RUI.</p>
              <Link
                href="mailto:rainbowfish.ui@gmail.com"
                className="block hover:underline hover:text-foreground w-fit"
              >
                rainbowfish.ui@gmail.com
              </Link>
            </div>
          </div>
        </div>
        <div
          className={`w-full h-full flex items-center justify-center text-8xl ${audiowide.className} tracking-widest text-gray-400 uppercase`}
        >
          <RiLeafFill size={100} />
          Creatify
        </div>
        <div className="w-full text-gray-400 flex items-center justify-between">
          <p>&copy; 2025 Creatify Studio Limited </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
