import React from "react";
import { Qwitcher_Grypen } from "next/font/google";
import { en } from "@/localization/en";

const qwitcherGrypen = Qwitcher_Grypen({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const lang = en;

const Heading = () => {
  return (
    <div className="size-full text-center flex flex-col gap-4 items-center">
      <h1
        className={`${qwitcherGrypen.className} max-md:text-8xl font-extrabold text-9xl max-sm:text-6xl drop-shadow-md`}
      >
        {lang.hero.heading}
      </h1>
      <p className="w-[40%] max-md:text-xs max-md:w-[80%]">
        {lang.hero.subheading}
      </p>
    </div>
  );
};

export default Heading;
