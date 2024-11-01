"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Modal from "./Modal";
import DestinationCard from "./DestinationCard";
import WorldMap from "./WorldMap";
import { FaMapMarkerAlt } from "react-icons/fa";
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
  const [showMap, setShowMap] = useState(false);

  const [carouselIndex, setCarouselIndex] = useState(0);
  const destinationsPerPage = 8;

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px 0px" });

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
      setCarouselIndex(carouselIndex - 1);
    }
  };

  const handleNext = () => {
    if (
      (carouselIndex + 1) * destinationsPerPage <
      filteredDestinations.length
    ) {
      setCarouselIndex(carouselIndex + 1);
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section ref={sectionRef} className="destinations py-12 bg-gray-50">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="destinations__title text-3xl font-bold text-center text-gray-800 mb-6"
      >
        Discover your next adventure!
      </motion.h2>

      <div className="flex items-center justify-center gap-4 mb-6">
        <div className="flex items-center space-x-2">
          <SearchFilter onSearch={handleSearch} />

          <button
            onClick={() => setShowMap(!showMap)}
            className="p-2 bg-gray-300 rounded-full hover:bg-gray-400 transition-colors -mt-7"
            aria-label="Toggle Map View"
          >
            <FaMapMarkerAlt size={20} color={showMap ? "#FF0000" : "#333"} />
          </button>
        </div>
      </div>

      {showMap ? (
        <WorldMap destinations={filteredDestinations} />
      ) : (
        <div className="relative flex justify-center overflow-hidden w-full">
          <AnimatePresence>
            <div
              key={carouselIndex}
              className="flex flex-wrap justify-center gap-6 w-full"
            >
              {displayedDestinations.length === 0 ? (
                <p className="text-center text-gray-600">
                  No destination found.
                </p>
              ) : (
                displayedDestinations.map((destination, index) => (
                  <motion.div
                    key={destination.name}
                    variants={cardVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    transition={{
                      duration: 0.3,
                      ease: "easeOut",
                      delay: index * 0.1,
                    }}
                  >
                    <DestinationCard
                      destination={destination.name}
                      imageUrl={destination.imageUrl}
                      prices={destination.prices}
                      onClick={() => handleCardClick(destination)}
                    />
                  </motion.div>
                ))
              )}
            </div>
          </AnimatePresence>
        </div>
      )}

      {!showMap && (
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
      )}

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        destination={selectedDestination}
      />
    </section>
  );
};

export default Destinations;
