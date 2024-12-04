import React from "react";
import { IconType } from "react-icons";
import { Audiowide } from "next/font/google";

const audiowide = Audiowide({
  weight: ["400"],
  subsets: ["latin"],
});

const Card = ({
  description,
  icon: Icon,
  name,
}: {
  icon: IconType;
  name: string;
  description: string;
}) => {
  return (
    <div className="h-60 max-w-80 flex items-center justify-center flex-col gap-2 text-center">
      <Icon className="text-foreground" size={32} />
      <p className={`text-lg font-semibold ${audiowide.className}`}>{name}</p>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default Card;
