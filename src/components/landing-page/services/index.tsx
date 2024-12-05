import React from "react";
import { Qwitcher_Grypen } from "next/font/google";
import Card from "./card";
import { en } from "@/components/localization/en";

const qwitcherGrypen = Qwitcher_Grypen({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const lang = en;

const Services = () => {
  return (
    <div
      className="w-full flex-col min-h-screen h-fit flex items-center justify-center py-20 gap-20 bg-[#fafafa]"
      id="services"
    >
      <div className="flex flex-col gap-2 items-center">
        <h2
          className={`${qwitcherGrypen.className} text-7xl font-semibold drop-shadow-lg`}
        >
          {lang.services.name}
        </h2>
        <p className="text-gray-700 text-center">{lang.services.description}</p>
      </div>
      <div className="w-[60%] min-h-96 grid lg:grid-cols-3 md:grid-cols-2 gap-2">
        {lang.services.items.map(({ description, image, name }) => {
          return (
            <Card
              name={name}
              description={description}
              image={image}
              key={`service-${name}`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Services;
