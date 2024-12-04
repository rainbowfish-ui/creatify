import React from "react";

const Achievements = () => {
  return (
    <div className="w-full h-fit min-h-32 flex items-center justify-center gap-10 py-10 flex-wrap">
      <div className="w-52 h-32 p-1 rounded-lg bg-gray-200">
        <div className="size-full flex flex-col items-center justify-center bg-white rounded-md font-semibold">
          <p className="text-2xl ">10,000+</p>
          <p className="text-lg tracking-wider text-gray-600">Purchases</p>
        </div>
      </div>
      <div className="w-52 h-32 p-1 rounded-lg bg-gray-200">
        <div className="size-full flex flex-col items-center justify-center bg-white rounded-md font-semibold">
          <p className="text-2xl ">867+</p>
          <p className="text-lg tracking-wider text-gray-600">UI Delivered</p>
        </div>
      </div>
      <div className="w-52 h-32 p-1 rounded-lg bg-gray-200">
        <div className="size-full flex flex-col items-center justify-center bg-white rounded-md font-semibold">
          <p className="text-2xl ">450+</p>
          <p className="text-lg tracking-wider text-gray-600">
            Unique Templates
          </p>
        </div>
      </div>
      <div className="w-52 h-32 p-1 rounded-lg bg-gray-200">
        <div className="size-full flex flex-col items-center justify-center bg-white rounded-md font-semibold">
          <p className="text-2xl ">680+</p>
          <p className="text-lg tracking-wider text-gray-600">
            Custom solution
          </p>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
