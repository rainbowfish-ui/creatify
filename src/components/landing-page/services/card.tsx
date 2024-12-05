import Image from "next/image";
import React from "react";

const Card = ({
  description,
  image,
  name,
}: {
  name: string;
  image: string;
  description: string;
}) => {
  return (
    <div className="flex items-center justify-center flex-col relative group max-h-40">
      <div className="absolute size-fit rounded-lg opacity-0 group-hover:opacity-100 top-0 transition-all group-hover:-top-14 duration-300 text-xs text-gray-700 p-1 bg-gray-200">
        <div className="size-full bg-white rounded-md flex items-center justify-center text-center p-2">
          {description}
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-2">
        <div className="w-36 h-fit overflow-hidden rounded-lg shadow-md">
          <Image
            src={image}
            alt={name}
            width={80}
            height={80}
            className="size-full transition-transform bg-black rounded-lg overflow-hidden"
          />
        </div>
        <p className="text-gray-700 group-hover:ml-2 transition-all">{name}</p>
      </div>
    </div>
  );
};

export default Card;
