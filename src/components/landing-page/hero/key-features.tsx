import { en } from "@/localization/en";
import React from "react";
import { FaCheck } from "react-icons/fa6";

const lang = en;

const KeyFeatures = () => {
  return (
    <div className="w-full flex gap-4 justify-center max-md:text-xs max-sm:flex-col items-center max-sm:gap-1">
      {lang.hero.highlights.map((feature) => {
        return (
          <div className="flex items-center gap-1" key={`key-${feature}`}>
            <div className="rounded-full p-0.5 border border-foreground">
              <FaCheck className="text-foreground size-2" />
            </div>
            {feature}
          </div>
        );
      })}
    </div>
  );
};

export default KeyFeatures;
