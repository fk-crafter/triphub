// SearchFilter.tsx
"use client";

import { useState } from "react";
import { Combobox } from "@headlessui/react";
import { destinations } from "@/constants"; // Assure-toi que tu as la liste des destinations

const SearchFilter = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const filteredDestinations =
    query === ""
      ? destinations
      : destinations.filter((destination) =>
          destination.name.toLowerCase().includes(query.toLowerCase())
        );

  return (
    <div className="mb-6">
      <Combobox
        onChange={onSearch}
        as="div"
        className="relative w-full max-w-md mx-auto" // Ajouté max-w-md et mx-auto pour centrer
      >
        <Combobox.Input
          className="border border-gray-300 rounded-lg py-2 px-4 w-full" // Garder la largeur pleine
          placeholder="Search for a destination..."
          onChange={(event) => setQuery(event.target.value)}
        />
        <Combobox.Options className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-auto">
          {filteredDestinations.length === 0 && query !== "" ? (
            <Combobox.Option value={query} disabled>
              Nothing found.
            </Combobox.Option>
          ) : (
            filteredDestinations.map((destination) => (
              <Combobox.Option
                key={destination.name}
                value={destination.name}
                className={({ active }) =>
                  `relative cursor-default select-none py-2 pl-10 pr-4 ${
                    active ? "bg-blue-500 text-white" : "text-gray-900"
                  }`
                }
              >
                {destination.name}
              </Combobox.Option>
            ))
          )}
        </Combobox.Options>
      </Combobox>
    </div>
  );
};

export default SearchFilter;
