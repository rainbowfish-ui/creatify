import React from "react";
import { Qwitcher_Grypen } from "next/font/google";
import Card from "./card";

const qwitcherGrypen = Qwitcher_Grypen({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const services = [
  {
    name: "Frontend development",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image:
      "https://cdn.dribbble.com/userupload/17851598/file/original-43f7634eb5abfc872158a779ff0cfd34.png?format=webp&resize=800x600&vertical=center",
  },
  {
    name: "UI/UX Design",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image:
      "https://cdn.dribbble.com/userupload/17862463/file/still-976f331e8694dae27913b41f54631db9.png?format=webp&resize=800x600&vertical=center",
  },
  {
    name: "Website Design",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image:
      "https://cdn.dribbble.com/userupload/17851062/file/original-c6ddd711eece7a01b372881ca29a3619.png?format=webp&resize=800x600&vertical=center",
  },
  {
    name: "More Services",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image:
      "https://cdn.dribbble.com/userupload/17843358/file/original-5e47d6bd9ceb07c91a338a80254a0261.png?format=webp&resize=800x600&vertical=center",
  },
  {
    name: "More Services",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image:
      "https://cdn.dribbble.com/userupload/17612082/file/original-0b5259cafa87a44962b6fce1316addf6.jpg?crop=0x0-1600x1200&format=webp&resize=640x480&vertical=center",
  },
  {
    name: "More Services",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image:
      "https://cdn.dribbble.com/userupload/17862976/file/original-ab40bb0801cbc6e210a0a83406b5d1a9.jpg?format=webp&resize=800x600&vertical=center",
  },
];

const Services = () => {
  return (
    <div className="w-full flex-col min-h-screen h-fit flex items-center justify-center pb-20 gap-20 bg-[#fafafa]">
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
      <div className="w-[60%] min-h-96 grid lg:grid-cols-3 md:grid-cols-2 gap-2">
        {services.map(({ description, image, name }) => {
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
