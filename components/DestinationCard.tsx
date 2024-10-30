import Image from "next/image";
import { motion } from "framer-motion";

interface DestinationCardProps {
  destination: string;
  imageUrl: string;
  prices: {
    flight: number;
    flightAndHotel: number;
    flightHotelActivity: number;
  };
  onClick: () => void;
}

const DestinationCard = ({
  destination,
  imageUrl,
  prices,
  onClick,
}: DestinationCardProps) => {
  return (
    <motion.div
      className="w-64 bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 cursor-pointer"
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="relative w-full" style={{ aspectRatio: "3 / 4" }}>
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 rounded-t-lg z-10"></div>

        <Image
          src={imageUrl}
          alt={destination}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />

        <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
          <h3 className="text-lg font-semibold text-white mb-1">
            {destination}
          </h3>
          <p className="text-sm text-white">Starting from {prices.flight} €</p>
        </div>
      </div>
    </motion.div>
  );
};

export default DestinationCard;
