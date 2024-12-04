import React from "react";
import { Qwitcher_Grypen } from "next/font/google";

const qwitcherGrypen = Qwitcher_Grypen({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const Heading = () => {
  return (
    <div className="size-full text-center flex flex-col gap-4">
      <h1
        className={`${qwitcherGrypen.className} font-extrabold text-9xl drop-shadow-md`}
      >
        Your launch partner
      </h1>
      <p>
        The landing pages that help companies build trust <br /> with their
        customers.
      </p>
    </div>
  );
};

export default Heading;
