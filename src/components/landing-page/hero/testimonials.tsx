import React from "react";
import TestimonialCard from "./testimonial-card";

const Testimonials = () => {
  return (
    <div className="w-full flex items-center justify-center gap-6">
      <TestimonialCard
        client="Subhash"
        clientImage="https://avatars.githubusercontent.com/u/64570322?v=4"
        designation="Founder at Winu"
        image1="https://cdn.dribbble.com/userupload/17839818/file/original-f63423b05d2bc6af638499ebd024a045.png?resize=2048x1536&vertical=center"
        image2="https://cdn.dribbble.com/userupload/17853808/file/original-7970c9c304f23125e7d01fa9df818c73.png?resize=2048x1536&vertical=center"
        quote={`"Our websites are going live in just hours, all thanks to the efficiency of RainbowfishUI!"`}
      />
      <TestimonialCard
        client="Melissa Tristan"
        clientImage="https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ="
        designation="Engineer at Asiaway"
        image1="https://cdn.dribbble.com/userupload/17853754/file/original-96c80dec6492c49b7b5d4594edb852ff.jpg?resize=2048x1536&vertical=center"
        image2="https://cdn.dribbble.com/userupload/17852780/file/original-19d2cef6b6efc3520a09c4e70033a355.png?resize=2048x1536&vertical=center"
        quote={`"Rainbowfish is a platform that enhances resources and empowers productivity."`}
      />
    </div>
  );
};

export default Testimonials;
