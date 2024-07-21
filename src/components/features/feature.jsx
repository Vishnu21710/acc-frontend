"use client";
import { LeafIcon } from "lucide-react";
import React, { useEffect, useRef } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

const Feature = ({ title, description }) => {
  const offsetX = useMotionValue(-100);
  const offsetY = useMotionValue(-100);

  const maskImage = useMotionTemplate`radial-gradient(100px 100px at ${offsetX}px ${offsetY}px,black,transparent)`;

  const borderRef = useRef(null);

  useEffect(() => {
    const updateMousePosition = (e) => {
      if (!borderRef.current) {
        return;
      }
      const rect = borderRef.current?.getBoundingClientRect();
      offsetX.set(e.x - rect.x);
      offsetY.set(e.y - rect.y);
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, [offsetX, offsetY]);

  return (
    <div
      className="border border-white/30 px-4 py-10 text-center rounded-xl sm:flex-1 relative"
      key={title}
    >
      <motion.div
        ref={borderRef}
        className="absolute inset-0 border-2 border-purple-400 rounded-xl"
        style={{ maskImage: maskImage, WebkitMaskImage: maskImage }}
      ></motion.div>
      <div className="inline-flex mx-auto h-14 w-14 bg-white text-black justify-center items-center rounded-lg ">
        <LeafIcon />
      </div>
      <h3 className="mt-6 font-bold">{title}</h3>
      <p className="mt-2 text-white/70 ">{description}</p>
    </div>
  );
};

export default Feature;
