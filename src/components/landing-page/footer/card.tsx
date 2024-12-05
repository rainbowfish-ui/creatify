import Link from "next/link";
import React from "react";

const Card = ({
  links,
  title,
}: {
  title: string;
  links: { name: string; route: string }[];
}) => {
  return (
    <div className="size-full flex flex-col gap-2">
      <p className="text-xl uppercase">{title}</p>
      <div>
        {links.map(({ name, route }) => {
          return (
            <Link
              href={route}
              className="block hover:underline hover:text-foreground w-fit"
              key={`footer-${name}`}
            >
              {name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
