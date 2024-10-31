"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { LogosCarouselData } from "@/constants";
import { useRef, useState, useEffect } from "react";

function useInView(ref: React.RefObject<Element>) {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [ref]);

  return isInView;
}

export default function LogosCarousel() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div className="mt-5" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="inline-flex w-full items-center justify-center">
          <motion.hr
            initial={{ translateX: "-50%", opacity: 0 }}
            animate={isInView ? { translateX: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, ease: "linear", delay: 0.3 }}
            className="my-8 mr-4 h-0.5 w-12 border-0 bg-primary md:mr-8"
          />
          <h2 className="text-center text-xl font-extrabold text-gray-800 md:text-2xl">
            Our Partners
          </h2>
          <motion.hr
            initial={{ translateX: "50%", opacity: 0 }}
            animate={isInView ? { translateX: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, ease: "linear", delay: 0.3 }}
            className="my-8 ml-4 h-0.5 w-12 border-0 bg-primary md:ml-8"
          />
        </div>

        <p className="text-center text-sm font-medium text-gray-600 mt-2 md:text-base max-w-2xl mx-auto">
          Our trusted partners, leaders in their fields, help us bring you
          top-quality services and an unforgettable travel experience.
        </p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
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
                    <Image
                      src={src}
                      alt="brand logo"
                      width={150}
                      height={150}
                    />
                  </div>
                )
              )}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

// avant changement
