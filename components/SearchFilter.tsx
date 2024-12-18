"use client";

import { useState, useRef, useEffect } from "react";
import { Combobox } from "@headlessui/react";
import { destinations } from "@/constants";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

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

const SearchFilter = ({ onSearch }: { onSearch: (value: string) => void }) => {
  const [query, setQuery] = useState<string>("");

  const filteredDestinations =
    query === ""
      ? destinations
      : destinations.filter((destination) => {
          const name = destination.name ?? "";
          return name.toLowerCase().includes(query.toLowerCase());
        });

  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mb-6 relative w-full max-w-xs md:max-w-md mx-auto px-4"
    >
      <Combobox
        onChange={(value: string) => {
          onSearch(value);
          setQuery(value);
        }}
        as="div"
        className="relative w-full"
      >
        <div className="relative">
          <Combobox.Input
            className="border border-gray-300 rounded-lg py-2 pl-10 pr-4 w-full"
            placeholder="Search a destination..."
            onChange={(event) => {
              const value = event.target.value;
              setQuery(value);
              onSearch(value);
            }}
          />

          <MagnifyingGlassIcon className="w-5 h-5 text-gray-800 absolute left-3 top-1/2 transform -translate-y-1/2" />
        </div>
        <Combobox.Options className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-auto">
          {filteredDestinations.length === 0 && query !== "" ? (
            <Combobox.Option value={query} disabled>
              Aucun résultat trouvé.
            </Combobox.Option>
          ) : (
            filteredDestinations.map((destination) => (
              <Combobox.Option
                key={destination.name}
                value={destination.name}
                className={({ active }) =>
                  `relative cursor-default select-none py-2 pl-10 pr-4 ${
                    active ? "bg-red-400 text-white" : "text-gray-900"
                  }`
                }
              >
                {destination.name}
              </Combobox.Option>
            ))
          )}
        </Combobox.Options>
      </Combobox>
    </motion.div>
  );
};

export default SearchFilter;
