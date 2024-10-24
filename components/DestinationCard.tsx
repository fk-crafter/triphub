// components/DestinationCard.tsx
import Image from "next/image";
import { motion } from "framer-motion";

interface DestinationCardProps {
  destination: string;
  imageUrl: string;
  onClick: () => void; // Prop pour gérer le clic
}

const DestinationCard = ({
  destination,
  imageUrl,
  onClick,
}: DestinationCardProps) => {
  return (
    <motion.div
      className="w-64 bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 cursor-pointer"
      onClick={onClick}
      whileHover={{ scale: 1.05 }} // Animation sur le survol
      whileTap={{ scale: 0.95 }} // Animation sur le clic
    >
      <div className="relative w-full h-48">
        <Image
          src={imageUrl}
          alt={destination}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          {destination}
        </h3>
      </div>
    </motion.div>
  );
};

export default DestinationCard;
