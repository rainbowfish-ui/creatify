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
        Ready to use landing pages designed to help companies build trust <br />{" "}
        and strengthen connections with their customers.
      </p>
    </div>
  );
};

export default Heading;
