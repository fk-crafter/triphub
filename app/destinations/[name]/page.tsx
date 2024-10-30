"use client";

import { useRouter } from "next/navigation";
import { destinations } from "@/constants";
import Image from "next/image";

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
    return <p>Destination not found</p>;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{destination.name}</h1>
      <Image
        src={destination.imageUrl}
        alt={destination.name}
        width={600}
        height={400}
        className="rounded-lg mb-4"
      />
      <p className="text-lg mb-4">{destination.description}</p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Included Activities</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Guided city tour</li>
        <li>Museum admission</li>
        <li>Beach day pass</li>
        <li>Boat cruise</li>
      </ul>

      <button
        onClick={() => window.history.back()}
        className="mt-4 bg-blue-500 text-white rounded-md px-4 py-2"
      >
        Go Back
      </button>
    </div>
  );
};

export default DestinationDetails;
