import React from "react";
import { Qwitcher_Grypen } from "next/font/google";
import Card from "./card";
import { SiThunderbird } from "react-icons/si";
import { SlMagicWand } from "react-icons/sl";
import { ImMagicWand } from "react-icons/im";
import { FaStudiovinari } from "react-icons/fa6";
import { GiFastArrow, GiNinjaStar } from "react-icons/gi";
import { RiAncientPavilionFill } from "react-icons/ri";

const qwitcherGrypen = Qwitcher_Grypen({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const benefits = [
  {
    name: "Rapid Development",
    description:
      "Launch fully functional websites in hours with streamlined tools and efficient workflows.",
    icon: SiThunderbird,
  },

  {
    name: "Ready to launch",
    description:
      "Quickly customize and deploy impactful websites with minimum efforts and resources.",
    icon: FaStudiovinari,
  },
  {
    name: "High Quality Software",
    description:
      "SEO-optimized software built with reliability and streamlined processes for maximum impact.",
    icon: ImMagicWand,
  },
  {
    name: "More Benefits",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, et!",
    icon: GiFastArrow,
  },
  {
    name: "More Benefits",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, et!",
    icon: RiAncientPavilionFill,
  },
  {
    name: "More Benefits",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, et!",
    icon: GiNinjaStar,
  },
];

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
        {benefits.map(({ description, icon, name }) => {
          return (
            <Card
              icon={icon}
              name={name}
              description={description}
              key={name}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Benefits;
