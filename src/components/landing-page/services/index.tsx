import React from "react";
import { Qwitcher_Grypen } from "next/font/google";

const qwitcherGrypen = Qwitcher_Grypen({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const Services = () => {
  return (
    <div className="w-full flex-col min-h-60 h-fit flex items-center justify-center pb-20 gap-4">
      <div className="flex flex-col gap-2 items-center">
        <h2
          className={`${qwitcherGrypen.className} text-7xl font-semibold drop-shadow-lg`}
        >
          Services
        </h2>
        <p className="text-gray-700">
          Get premium quality work to stand out from the crowd
        </p>
      </div>
    </div>
  );
};

export default Services;
