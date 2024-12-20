"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "../ui/images-slider";
import CallAndWhatsappButton from "../buttons/CallAndWhatsappButton";

export function MainBannerSlider() {
  const images = ["/b-1.jpg", "/b-2.jpg", "/b-3.jpg"];
  return (
    <ImagesSlider className="h-[40rem]" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col items-center justify-center"
      >
        <motion.p className="bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text py-4 text-center text-2xl font-bold text-transparent md:text-6xl">
        Fast, reliable repairs for a hassle-free home.        </motion.p>
        <motion.p className="max-w-5xl bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text py-4 text-center text-lg text-transparent md:text-2xl">
        Our skilled technicians are committed to restoring your appliances
              to peak performance, ensuring your comfort and convenience. From
              fixing minor glitches to tackling major breakdowns, we've got you
              covered. Experience top-notch service that keeps your household
              running smoothly!
        </motion.p>
        <CallAndWhatsappButton />
      </motion.div>
    </ImagesSlider>
  );
}
