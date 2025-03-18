"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import left from "/public/left.svg";
import right from "/public/right.svg";
import { images } from "./constants"; // Ensure this is correctly imported

type Props = {
  activeImage: number;
  clickNext: () => void;
  clickPrev: () => void;
};

const Description = ({ activeImage, clickNext, clickPrev }: Props) => {
  return (
    <div className="grid place-items-start w-full bg-[#e7dfd9] relative md:rounded-tr-3xl md:rounded-br-3xl">
      <div className="uppercase text-sm absolute right-4 top-2 underline-offset-4 underline">
        Coffee Cafe
      </div>
      {images.map((elem, idx) => (
        <div
          key={idx}
          className={`${
            idx === activeImage
              ? "block w-full h-full md:h-[80vh] py-20 md:px-20 px-10 text-left"
              : "hidden"
          }`}
        >
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              ease: "linear",
              duration: 2,
              x: { duration: 1 },
            }}
            className="w-full"
          >
            <div className="py-16 text-5xl font-extrabold">{elem.title}</div>
            <div className="leading-relaxed font-medium text-base tracking-wide h-60 md:h-40 italic text-gray-600">
              {elem.desc}
            </div>
          </motion.div>

          <button className="bg-[#ecae7e] text-white uppercase px-4 py-2 rounded-md my-10">
            Order Now
          </button>

          <div className="absolute md:bottom-1 bottom-10 right-10 md:right-0 w-full flex justify-center items-center">
            <div
              className="absolute bottom-2 right-10 cursor-pointer"
              onClick={clickPrev}
            >
              <Image src={left} alt="Previous" width={40} height={40} />
            </div>

            <div
              className="absolute bottom-2 right-2 cursor-pointer"
              onClick={clickNext}
            >
              <Image src={right} alt="Next" width={40} height={40} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Description;
