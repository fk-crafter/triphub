"use client";
import DestinationCard from "./DestinationCard";
import { destinations } from "@/constants";
import SearchFilter from "./SearchFilter";
import { useState } from "react";

const Destinations = () => {
  const [allDestinations] = useState(destinations);
  const [filteredDestinations, setFilteredDestinations] =
    useState(allDestinations);

  const handleSearch = (query: string) => {
    console.log("Query:", query);

    if (query === "") {
      setFilteredDestinations(allDestinations);
      return;
    }

    const results = allDestinations.filter((dest) => {
      const destName = dest.name;
      console.log("Destination Name:", destName);

      return (
        destName &&
        typeof destName === "string" &&
        destName.trim() !== "" &&
        destName.toLowerCase().includes(query.toLowerCase())
      );
    });

    console.log("Filtered Results:", results);

    setFilteredDestinations(results);
  };

  return (
    <section className="destinations py-12 bg-gray-50">
      <h2 className="destinations__title text-3xl font-bold text-center text-gray-800 mb-6">
        Découvrez votre prochaine aventure !
      </h2>
      <p className="text-center text-lg text-gray-600 mb-8">
        Explorez des destinations à couper le souffle et créez des souvenirs
        inoubliables. Votre voyage de rêve vous attend !
      </p>

      <SearchFilter onSearch={handleSearch} />

      <div className="flex flex-wrap justify-center gap-6">
        {filteredDestinations.length === 0 ? (
          <p className="text-center text-gray-600">
            Aucune destination trouvée.
          </p>
        ) : (
          filteredDestinations.map((destination) => (
            <div
              key={destination.name}
              className="w-64 bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              <DestinationCard
                destination={destination.name}
                imageUrl={destination.imageUrl}
              />
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default Destinations;
