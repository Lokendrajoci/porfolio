"use client";
import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";
import React from "react";

export default function Introduction() {
  const words = [
    {
      text: "a",
    },
    {
      text: "passionate",
    },
    {
      text: "developer .",
    },
  ];
  return (
    <>
      <div className="w-full grid grid-cols-4 md:grid-cols-7 mt-5">
        <div className="col-span-4 md:col-span-2 md:col-start-2 md:col-end-5">
          <h1 className="text-white text-xl sm:text-lg md:text-2xl">
            Hi, I'm Lokendra Joshi
          </h1>
          <TypewriterEffectSmooth words={words} />
        </div>
      </div>
    </>
  );
}
