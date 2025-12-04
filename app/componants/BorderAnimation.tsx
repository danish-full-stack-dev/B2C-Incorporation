"use client";
import "../componants/animation/borderAmination.css";
import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export const BorderAnimation: React.FC<Props> = ({ children, className }) => {
  return <div className={`border-animated ${className}`}>{children}</div>;
};
