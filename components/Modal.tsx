"use client";

import { motion } from "framer-motion";
import { FaInfoCircle, FaTimes } from "react-icons/fa";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  destination: {
    name: string;
    imageUrl: string;
    prices: {
      flight: number;
      flightAndHotel: number;
      flightHotelActivity: number;
    };
  };
}

const Modal = ({ isOpen, onClose, destination }: ModalProps) => {
  const [tooltip, setTooltip] = useState<string | null>(null);
  const router = useRouter();

  const handleActivityClick = () => {
    const destinationSlug = encodeURIComponent(
      destination.name.toLowerCase().replace(/ /g, "-")
    );
    window.open(`/destinations/${destinationSlug}`, "_blank");
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    } else {
      window.removeEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-white rounded-lg p-6 shadow-lg relative"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          aria-label="Close"
        >
          <FaTimes size={20} />
        </button>

        <h2 className="text-xl font-bold mb-4">{destination.name}</h2>
        <Image
          src={destination.imageUrl}
          alt={destination.name}
          width={300}
          height={200}
          className="mb-4 rounded-md object-cover"
        />
        <table className="min-w-full">
          <thead>
            <tr className="bg-gray-200">
              <th className="text-left p-2">Type</th>
              <th className="text-left p-2">Price (€)</th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                label: "Flight",
                price: destination.prices.flight,
                info: "Includes round-trip flight.",
              },
              {
                label: "Flight + Hotel",
                price: destination.prices.flightAndHotel,
                info: "Includes flight and hotel",
              },
              {
                label: "Flight + Hotel + Activity",
                price: destination.prices.flightHotelActivity,
                info: "Click to view included activities",
              },
            ].map((option, index) => (
              <tr key={index}>
                <td className="p-2 flex items-center relative">
                  {option.label}
                  <div
                    className="relative ml-2"
                    onMouseEnter={() => setTooltip(option.info)}
                    onMouseLeave={() => setTooltip(null)}
                    onClick={
                      option.label === "Flight + Hotel + Activity"
                        ? handleActivityClick
                        : undefined
                    }
                  >
                    <FaInfoCircle className="text-blue-400 cursor-pointer" />
                    {tooltip === option.info && (
                      <div className="absolute top-6 left-0 bg-gray-700 text-white text-sm p-2 rounded-md shadow-lg w-max z-10">
                        {tooltip}
                      </div>
                    )}
                  </div>
                </td>
                <td className="p-2">{option.price}€</td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </motion.div>
  );
};

export default Modal;
