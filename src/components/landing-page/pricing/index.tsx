import React from "react";
import { Qwitcher_Grypen } from "next/font/google";
import Card from "./card";

const qwitcherGrypen = Qwitcher_Grypen({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const pricing = [
  {
    type: "Individuals",
    price: 40,
    description:
      "Good for individuals who are just starting out and simply want the essentials.",
    features: [
      "1 user",
      "Basic Analytics",
      "Unlimited access",
      "Email Support",
      "Mobile Access",
      "Data Backup",
    ],
  },
  {
    type: "Pro",
    price: 140,
    description:
      "Perfect for professionals or small teams who need enhanced tools and support.",
    features: [
      "Up to 5 Users",
      "Priority Support",
      "Advanced Analytics",
      "Cloud Storage",
      "Custom Integrations",
      "Multi-Device Sync",
      "Weekly Data Backup",
    ],
  },
  {
    type: "Enterprise",
    price: 300,
    description:
      "Perfect for professionals or small teams who need enhanced tools and support.",
    features: [
      "Unlimited Users",
      "Dedicated Account Manager",
      "Advanced Customization",
      "Unlimited Cloud Storage",
      "Enterprise-Grade Security",
      "Team Collaboration Tools",
      "API Access",
      "24/7 Priority Support",
    ],
  },
];

const Pricing = () => {
  return (
    <div
      className="w-full flex-col min-h-screen h-full flex items-center bg-[#fafafa]"
      id="pricing"
    >
      <h2
        className={`${qwitcherGrypen.className} text-7xl font-semibold drop-shadow-lg py-6`}
      >
        Pricing
      </h2>
      <div className="size-full flex gap-6 items-center justify-center flex-wrap">
        {pricing.map(({ features, price, type, description }) => {
          return (
            <Card
              features={features}
              price={price}
              type={type}
              key={`pricing-${type}`}
              description={description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Pricing;
