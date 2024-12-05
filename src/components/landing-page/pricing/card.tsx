import Link from "next/link";
import React from "react";
import { FaCheck } from "react-icons/fa6";

const Card = ({
  features,
  price,
  type,
  description,
}: {
  features: string[];
  price: number;
  type: string;
  description: string;
}) => {
  return (
    <div className="w-80 h-full min-h-96 rounded-lg border shadow-md p-4">
      <h4 className="font-semibold pb-4">{type}</h4>
      <div className="size-full">
        <p className="text-xs">Starts at</p>
        <p className="font-bold text-3xl pb-4">
          ${price}{" "}
          <span className="text-sm text-gray-700 font-normal">/month</span>
        </p>
        <p className="text-xs text-gray-600">{description}</p>
        <Link
          href="#pricing"
          className="w-full py-1 bg-gray-950 text-white rounded-lg my-3 hover:scale-[.99] transition-transform block text-center"
        >
          Get Started
        </Link>
      </div>
      <div className="h-1 bg-bottom bg-gradient-to-r from-[rgba(0,0,0,0.33)] to-[rgba(255,255,255,0)] bg-repeat-x [background-size:10px_1px]" />
      <div className="size-full flex flex-col gap-2 py-2">
        {features.map((feature) => {
          return (
            <div className="flex items-center gap-2">
              <div className="p-0.5 rounded-full border border-foreground text-foreground">
                <FaCheck size={10} />
              </div>
              {feature}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
