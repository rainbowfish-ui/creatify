import Image from "next/image";
import React from "react";

const TestimonialCard = ({
  image1,
  image2,
  quote,
  client,
  designation,
  clientImage,
}: {
  image1: string;
  image2: string;
  quote: string;
  client: string;
  designation: string;
  clientImage: string;
}) => {
  return (
    <div className="w-80 h-40 flex items-center justify-center gap-4">
      <div className="w-fit flex">
        <div className="size-12 rounded-lg rotate-6 bg-green-200 overflow-hidden shadow-md">
          <Image
            src={image1}
            alt="web"
            width={1}
            height={1}
            className="size-full object-contain"
          />
        </div>
        <div className="size-12 rounded-lg -rotate-6 bg-pink-200 overflow-hidden shadow-md">
          <Image
            src={image2}
            alt="web"
            width={1}
            height={1}
            className="size-full object-contain"
          />
        </div>
      </div>
      <div className="w-full flex flex-col gap-1">
        <p className="text-xs">{quote}</p>
        <div className="flex text-xs gap-1">
          <div className="size-6 rounded-full bg-black overflow-hidden border">
            <Image
              src={clientImage}
              alt="web"
              width={1}
              height={1}
              className="size-full object-contain"
            />
          </div>
          <div>
            <p>{client}</p>
            <p className="text-[0.6rem] -mt-1.5">{designation}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
