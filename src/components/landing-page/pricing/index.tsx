import React from "react";
import { Qwitcher_Grypen } from "next/font/google";
import Card from "./card";
import { en } from "@/components/localization/en";

const qwitcherGrypen = Qwitcher_Grypen({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const lang = en;

const Pricing = () => {
  return (
    <div
      className="w-full flex-col min-h-screen h-full flex items-center bg-[#fafafa] py-10"
      id="pricing"
    >
      <h2
        className={`${qwitcherGrypen.className} text-7xl font-semibold drop-shadow-lg py-6`}
      >
        {lang.pricing.name}
      </h2>
      <div className="size-full flex gap-6 items-center justify-center flex-wrap">
        {lang.pricing.items.map(({ features, price, type, description }) => {
          return (
            <Card
              features={features}
              price={price}
              type={type}
              key={`pricing-${type}`}
              description={description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Pricing;
