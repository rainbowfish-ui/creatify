import React from "react";
import { Qwitcher_Grypen } from "next/font/google";
import Card from "./card";
import { SiThunderbird } from "react-icons/si";
import { ImMagicWand } from "react-icons/im";
import { FaStudiovinari } from "react-icons/fa6";
import { GiFastArrow, GiNinjaStar } from "react-icons/gi";
import { RiAncientPavilionFill } from "react-icons/ri";
import { en } from "@/localization/en";

const qwitcherGrypen = Qwitcher_Grypen({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const lang = en;

const Benefits = () => {
  return (
    <div
      className="w-full flex-col min-h-60 h-fit flex items-center justify-center py-20 gap-4"
      id="benefits"
    >
      <h2
        className={`${qwitcherGrypen.className} text-7xl font-semibold drop-shadow-lg`}
      >
        Benefits
      </h2>
      <div className="w-[70%] min-h-96 grid lg:grid-cols-3 md:grid-cols-2 gap-4">
        {lang.benefits.items.map(({ description, icon, name }) => {
          return (
            <Card
              icon={icon}
              name={name}
              description={description}
              key={`benefits-${name}`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Benefits;
