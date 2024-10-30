"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

const Hero = () => {
  const titleVariants = {
    hover: { y: -5 },
    rest: { y: 0 },
  };
  const imageVariants = {
    hover: {
      scale: 1.05,
      rotate: 2,
      transition: { type: "spring", stiffness: 300, damping: 10 },
    },
    rest: { scale: 1 },
  };

  return (
    <div className="relative h-screen flex items-center justify-between container mx-auto px-10">
      <div className="w-1/2 z-20">
        <div className="flex items-center mt-24 mb-6">
          {[...Array(5)].map((_, index) => (
            <FaStar
              key={index}
              size={24}
              color={index < 4 ? "#FFD700" : "#FFD700"}
            />
          ))}
          <span className="text-gray-800 text-lg ml-2">4.8</span>
          <span className="text-gray-800 text-lg mx-4">|</span>
          <span className="text-gray-800 text-lg">10k+ users</span>
        </div>

        <motion.h1
          className="text-gray-800 text-4xl md:text-5xl font-extrabold leading-tight tracking-wider"
          initial="rest"
          whileHover="hover"
          variants={titleVariants}
        >
          Book Your Dream Trip Today!
        </motion.h1>
        <p className="text-gray-800 text-lg md:text-xl mt-4">
          Streamline your trip with our effortless booking process. Find
          everything you need in just a few clicks!
        </p>
        <motion.button
          className="bg-red-400 text-white rounded-full mt-10 px-6 py-3 hover:shadow-lg"
          whileHover={{ scale: 1.1 }}
        >
          Explore Country
        </motion.button>
      </div>
      <div className="w-1/2 relative z-10 flex justify-center items-center h-auto pointer-events-none">
        <motion.div
          initial="rest"
          whileHover="hover"
          className="relative w-[30vw] h-[20vw] pointer-events-auto overflow-hidden"
          variants={imageVariants}
        >
          <Image
            src="/hero.png"
            alt="hero"
            layout="fill"
            objectFit="contain"
            className="rounded-lg"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
