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
      <div className="w-full  grid grid-cols-7  mt-5">
        <div className="col-span-2 col-start-2 col-end-5">
          <h1 className="text-white text-3xl">Hi, I'm Lokendra Joshi</h1>
          <TypewriterEffectSmooth words={words} />
        </div>
      </div>
    </>
  );
}
