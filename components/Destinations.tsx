"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Modal from "./Modal";
import DestinationCard from "./DestinationCard";
import { destinations } from "@/constants";
import SearchFilter from "./SearchFilter";
import { Destination } from "@/types";

const Destinations = () => {
  const [allDestinations] = useState<Destination[]>(destinations);
  const [filteredDestinations, setFilteredDestinations] =
    useState(allDestinations);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDestination, setSelectedDestination] =
    useState<Destination | null>(null);

  const [carouselIndex, setCarouselIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const destinationsPerPage = 8;

  const handleSearch = (query: string) => {
    if (query === "") {
      setFilteredDestinations(allDestinations);
      setCarouselIndex(0);
      return;
    }

    const results = allDestinations.filter((dest) =>
      dest.name.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredDestinations(results);
    setCarouselIndex(0);
  };

  const handleCardClick = (destination: Destination) => {
    setSelectedDestination(destination);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedDestination(null);
  };

  const displayedDestinations = filteredDestinations.slice(
    carouselIndex * destinationsPerPage,
    carouselIndex * destinationsPerPage + destinationsPerPage
  );

  const handlePrev = () => {
    if (carouselIndex > 0) {
      setDirection(-1);
      setCarouselIndex(carouselIndex - 1);
    }
  };

  const handleNext = () => {
    if (
      (carouselIndex + 1) * destinationsPerPage <
      filteredDestinations.length
    ) {
      setDirection(1);
      setCarouselIndex(carouselIndex + 1);
    }
  };

  const subtleSlideVariants = {
    hidden: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
    }),
    visible: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 50 : -50,
      opacity: 0,
    }),
  };

  // Référence et détection de l'entrée en vue
  const titleRef = useRef(null);
  const isInView = useInView(titleRef, { once: true });

  return (
    <section className="destinations py-12 bg-gray-50">
      {/* Animation d'apparition pour le titre */}
      <motion.h2
        ref={titleRef}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="destinations__title text-3xl font-bold text-center text-gray-800 mb-6"
      >
        Discover your next adventure!
      </motion.h2>

      <SearchFilter onSearch={handleSearch} />

      <div className="relative flex justify-center overflow-hidden w-full">
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={carouselIndex}
            className="flex flex-wrap justify-center gap-6 w-full"
            variants={subtleSlideVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            custom={direction}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {displayedDestinations.length === 0 ? (
              <p className="text-center text-gray-600">No destination found.</p>
            ) : (
              displayedDestinations.map((destination) => (
                <DestinationCard
                  key={destination.name}
                  destination={destination.name}
                  imageUrl={destination.imageUrl}
                  prices={destination.prices}
                  onClick={() => handleCardClick(destination)}
                />
              ))
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center gap-4 mt-8">
        <button
          onClick={handlePrev}
          disabled={carouselIndex === 0}
          className="px-4 py-2 bg-gray-300 text-gray-800 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={
            (carouselIndex + 1) * destinationsPerPage >=
            filteredDestinations.length
          }
          className="px-4 py-2 bg-gray-300 text-gray-800 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        destination={selectedDestination}
      />
    </section>
  );
};

export default Destinations;
