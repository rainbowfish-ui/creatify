import React from "react";
import Heading from "./heading";
import Link from "next/link";
import { Audiowide } from "next/font/google";
import { RiLeafFill } from "react-icons/ri";
import { en } from "@/components/localization/en";
import Card from "./card";

const audiowide = Audiowide({
  weight: ["400"],
  subsets: ["latin"],
});

const lang = en;

const Icon = lang.brand.logo;

const Footer = () => {
  return (
    <div
      className="w-full min-h-96 h-full flex items-center justify-center bg-[#FAFAFA]"
      id="footer"
    >
      <div className="w-[80%] min-h-96 h-full bg-black rounded-t-xl text-white pt-4 px-4 flex flex-col gap-6">
        <Heading />
        <div className="w-full h-fit flex items-center justify-between px-10">
          {lang.footer.items.map(({ items, title }, idx) => {
            return (
              <Card
                links={items}
                title={title}
                key={`footer-${idx}-${title}`}
              />
            );
          })}
        </div>
        <div
          className={`w-full h-full flex items-center justify-center text-8xl ${audiowide.className} tracking-widest text-gray-400 uppercase`}
        >
          <Icon size={100} />
          {lang.brand.name}
        </div>
        <div className="w-full text-gray-400 flex items-center justify-between">
          <p>{lang.footer.copyright}</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
