"use client";
import { useState } from "react";
import Modal from "./Modal"; 
import DestinationCard from "./DestinationCard";
import { destinations } from "@/constants";
import SearchFilter from "./SearchFilter";

const Destinations = () => {
  const [allDestinations] = useState(destinations);
  const [filteredDestinations, setFilteredDestinations] =
    useState(allDestinations);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState(null);

  const handleSearch = (query: string) => {
    if (query === "") {
      setFilteredDestinations(allDestinations);
      return;
    }

    const results = allDestinations.filter((dest) =>
      dest.name.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredDestinations(results);
  };

  const handleCardClick = (destination) => {
    setSelectedDestination(destination); 
    setIsModalOpen(true); 
  };

  const closeModal = () => {
    setIsModalOpen(false); 
    setSelectedDestination(null); 
  };

  return (
    <section className="destinations py-12 bg-gray-50">
      <h2 className="destinations__title text-3xl font-bold text-center text-gray-800 mb-6">
        Découvrez votre prochaine aventure !
      </h2>
      <SearchFilter onSearch={handleSearch} />

      <div className="flex flex-wrap justify-center gap-6">
        {filteredDestinations.length === 0 ? (
          <p className="text-center text-gray-600">
            Aucune destination trouvée.
          </p>
        ) : (
          filteredDestinations.map((destination) => (
            <DestinationCard
              key={destination.name}
              destination={destination.name}
              imageUrl={destination.imageUrl}
              onClick={() => handleCardClick(destination)} 
            />
          ))
        )}
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
