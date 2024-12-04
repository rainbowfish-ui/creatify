import React from "react";
import { FaCheck } from "react-icons/fa6";

const features = [
  "Designed by Experts",
  "Launch Quickly",
  "Built with Next.js and Tailwind",
];

const KeyFeatures = () => {
  return (
    <div className="w-full flex gap-4 justify-center">
      {features.map((feature) => {
        return (
          <div className="flex items-center gap-1">
            <div className="rounded-full p-0.5 border border-foreground">
              <FaCheck className="text-foreground" size={10} />
            </div>
            {feature}
          </div>
        );
      })}
    </div>
  );
};

export default KeyFeatures;
