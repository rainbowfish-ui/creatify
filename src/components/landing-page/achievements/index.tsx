import React from "react";
import { en } from "@/components/localization/en";

const lang = en;

const Achievements = () => {
  return (
    <div className="w-full h-fit min-h-32 flex items-center justify-center gap-10 py-10 flex-wrap">
      {lang.achievements.map(({ figures, name }) => {
        return (
          <div className="w-52 h-32 p-1 rounded-lg bg-gray-200" key={name}>
            <div className="size-full flex flex-col items-center justify-center bg-white rounded-md font-semibold">
              <p className="text-2xl ">{figures}</p>
              <p className="text-lg tracking-wider text-gray-600">{name}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Achievements;
