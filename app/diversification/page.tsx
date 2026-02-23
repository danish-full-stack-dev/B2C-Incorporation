import React from "react";

export default function page() {
  return (
    <div>
      {[
        {
          heading: "Real State",
          to: "/diversification/pages/realstate",
        },
        {
          heading: "Trading Platform",
          to: "/diversification/pages/tradings",
        },
        {
          heading: "Online Reputation Management (ORM's)",
          to: "/diversification/pages/orm",
        },
      ].map((value, idx) => (
        <a
          href={value.to}
          key={idx}
          className="hover:text-blue-500 transition hover:cursor-pointer"
        >
          {value.heading}
        </a>
      ))}
    </div>
  );
}
