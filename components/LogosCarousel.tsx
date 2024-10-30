"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { LogosCarouselData } from "@/constants";

export default function LogosCarousel() {
  return (
    <div className="mt-20">
      <div className="inline-flex w-full items-center justify-center">
        <motion.hr
          initial={{ translateX: "-50%", opacity: 0 }}
          animate={{ translateX: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "linear", delay: 1 }}
          className="my-8 mr-4 h-0.5 w-12 border-0 bg-primary md:mr-8"
        />
        <h2 className="text-center text-xl font-extrabold text-gray-800 md:text-2xl">
          Our Partners
        </h2>
        <motion.hr
          initial={{ translateX: "50%", opacity: 0 }}
          animate={{ translateX: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "linear", delay: 1 }}
          className="my-8 ml-4 h-0.5 w-12 border-0 bg-primary md:ml-8"
        />
      </div>

      <p className="text-center text-sm font-medium text-gray-600 mt-2 md:text-base max-w-2xl mx-auto">
        Our trusted partners, leaders in their fields, help us bring you
        top-quality services and an unforgettable travel experience.
      </p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mx-7 mt-8 flex overflow-hidden rounded-2xl bg-bgCard py-7"
      >
        <motion.div
          initial={{ translateX: 0 }}
          animate={{ translateX: "-50%" }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex flex-none gap-[5.5rem] pr-[5.5rem]"
        >
          <div className="flex gap-[5.5rem]">
            {LogosCarouselData.concat(LogosCarouselData).map(
              ({ src }, index) => (
                <div
                  key={index}
                  className="flex w-auto flex-shrink-0 list-none items-center md:gap-5"
                >
                  <Image src={src} alt="brand logo" width={150} height={150} />
                </div>
              )
            )}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
