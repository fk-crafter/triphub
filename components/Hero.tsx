"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

const Hero = () => {
  // Variants d'animation pour l'image (arrivée par la droite)
  const imageVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
    hover: {
      scale: 1.05,
      rotate: 2,
      transition: { type: "spring", stiffness: 300, damping: 10 },
    },
  };

  // Variants d'animation pour le texte et les étoiles (arrivée par la gauche)
  const textVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="relative h-screen flex flex-col-reverse md:flex-row items-center justify-between container mx-auto px-6 md:px-10">
      {/* Section Texte */}
      <motion.div
        className="w-full md:w-1/2 z-20 text-center md:text-left mt-6 md:mt-0"
        initial="hidden"
        animate="visible"
        variants={textVariants}
      >
        <div className="flex justify-center md:justify-start items-center mt-8 md:mt-24 mb-4 md:mb-6">
          {[...Array(5)].map((_, index) => (
            <FaStar key={index} size={20} color="#FFD700" />
          ))}
          <span className="text-gray-800 text-base md:text-lg ml-2">4.8</span>
          <span className="text-gray-800 text-base md:text-lg mx-2 md:mx-4">
            |
          </span>
          <span className="text-gray-800 text-base md:text-lg">10k+ users</span>
        </div>

        <motion.h1
          className="text-gray-800 text-3xl md:text-5xl font-extrabold leading-tight tracking-wider"
          initial="rest"
          whileHover="hover"
        >
          Book Your Dream Trip Today!
        </motion.h1>
        <p className="text-gray-800 text-base md:text-xl mt-2 md:mt-4">
          Streamline your trip with our effortless booking process. Find
          everything you need in just a few clicks!
        </p>
        <motion.button
          className="bg-red-400 text-white rounded-full mt-6 md:mt-10 px-4 md:px-6 py-2 md:py-3 hover:shadow-lg"
          whileHover={{ scale: 1.1 }}
        >
          Explore Country
        </motion.button>
      </motion.div>

      {/* Section Image */}
      <motion.div
        className="w-full md:w-1/2 relative z-10 flex justify-center items-center h-48 md:h-auto pointer-events-none mt-[9rem] md:mt-0"
        initial="hidden"
        animate="visible"
        variants={imageVariants}
      >
        <motion.div
          className="relative w-[80vw] h-[50vw] md:w-[30vw] md:h-[20vw] pointer-events-auto overflow-hidden"
          whileHover="hover"
        >
          <Image
            src="/hero.png"
            alt="hero"
            layout="fill"
            objectFit="contain"
            className="rounded-lg"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
