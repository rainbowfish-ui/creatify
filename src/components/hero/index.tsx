import React from "react";
import KeyFeatures from "./key-features";
import Heading from "./heading";
import LoginButton from "./button";
import Testimonials from "./testimonials";

const Hero = () => {
  return (
    <div className="w-full min-h-96 h-fit flex flex-col items-center justify-start pt-16 gap-5">
      <KeyFeatures />
      <Heading />
      <LoginButton />
      <Testimonials />
    </div>
  );
};

export default Hero;
