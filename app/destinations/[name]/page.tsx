"use client";

import { destinations } from "@/constants";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const DestinationDetails = ({ params }: { params: { name: string } }) => {
  const { name } = params;

  const slug = name
    .toLowerCase()
    .replace(/-/g, " ")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  const destination = destinations.find(
    (dest) =>
      dest.name
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "") === slug
  );

  if (!destination) {
    return (
      <p className="text-center mt-10 text-gray-600">Destination not found</p>
    );
  }

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <div className="bg-white shadow-lg rounded-lg p-6 mt-32">
        <div className="flex items-center mb-6 space-x-3">
          <h1 className="text-4xl font-bold text-gray-800">
            {destination.name}
          </h1>
          <span className="text-2xl">🌍</span>
        </div>

        <div className="w-full rounded-lg overflow-hidden mb-6">
          <Image
            src={destination.imageUrl}
            alt={destination.name}
            width={800}
            height={400}
            className="rounded-lg object-cover w-full"
          />
        </div>

        <p className="text-lg text-gray-700 mb-8 text-justify">
          {destination.description ||
            "Discover the beauty and uniqueness of this destination!"}
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Included Activities
        </h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2 pl-4 mb-8">
          <li>Guided city tour</li>
          <li>Museum admission</li>
          <li>Beach day pass</li>
          <li>Boat cruise</li>
        </ul>

        <div className="flex justify-center">
          <motion.button
            onClick={() => window.history.back()}
            className="bg-red-400 text-white rounded-full px-4 md:px-6 py-2 md:py-3 hover:shadow-lg"
            whileHover={{ scale: 1.1 }}
          >
            Go Back
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetails;
