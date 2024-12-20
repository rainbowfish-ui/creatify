import React from "react";
import TestimonialCard from "./testimonial-card";
import { en } from "@/localization/en";

const lang = en;

const Testimonials = () => {
  return (
    <div className="w-full flex items-center justify-center gap-6 max-md:flex-col max-md:gap-10 py-10">
      {lang.hero.testimonials.map(
        ({
          client,
          clientImage,
          designation,
          productImag1,
          productImag2,
          quote,
        }) => {
          return (
            <TestimonialCard
              key={`testimonials-${client}`}
              client={client}
              clientImage={clientImage}
              designation={designation}
              image1={productImag1}
              image2={productImag2}
              quote={quote}
            />
          );
        }
      )}
    </div>
  );
};

export default Testimonials;
