"use client";
import "../componants/animation/borderAnimation.css";
import React from "react";

const paddingMap: Record<number, string> = {
  0: "p-0",
  8: "p-8",
  10: "p-10",
  12: "p-12",
  6: "p-6",
};

interface Props {
  children: React.ReactNode;
  className?: string;
  padding?: number;
}

export const BorderAnimation: React.FC<Props> = ({
  padding = 0,
  children,
  className,
}) => {
  return (
    <div
      className={`border-animated ${paddingMap[padding]} ${className}`}
    >
      {children}
    </div>
  );
};
