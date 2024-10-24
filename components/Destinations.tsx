"use client";
import DestinationCard from "./DestinationCard"; // On importera le composant pour afficher une destination
import { destinations } from "@/constants"; // On importe la liste des destinations
import SearchFilter from "./SearchFilter"; // N'oublie pas d'importer le composant SearchFilter
import { useState } from "react";

const Destinations = () => {
  const [filteredDestinations, setFilteredDestinations] =
    useState(destinations);

  const handleSearch = (destination) => {
    setFilteredDestinations(
      destinations.filter((dest) => dest.name === destination)
    );
  };

  return (
    <section className="destinations py-12 bg-gray-50">
      <h2 className="destinations__title text-3xl font-bold text-center text-gray-800 mb-6">
        Discover Your Next Adventure!
      </h2>
      <p className="text-center text-lg text-gray-600 mb-8">
        Explore breathtaking destinations and create unforgettable memories.
        Your dream trip awaits!
      </p>

      <SearchFilter onSearch={handleSearch} />

      <div className="flex flex-wrap justify-center gap-6">
        {filteredDestinations.map((destination) => (
          <div
            key={destination.name}
            className="w-64 bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            <DestinationCard
              destination={destination.name}
              imageUrl={destination.imageUrl}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Destinations;
