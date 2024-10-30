import Image from "next/image";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState } from "react";

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
  const [isHover, setIsHover] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-50, 50], [-10, 10]);
  const rotateY = useTransform(x, [-50, 50], [10, -10]);

  const handleMouseMove = (event: React.MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const cardCenterX = rect.left + rect.width / 2;
    const cardCenterY = rect.top + rect.height / 2;

    const offsetX = ((event.clientX - cardCenterX) / rect.width) * 100;
    const offsetY = ((event.clientY - cardCenterY) / rect.height) * 100;

    x.set(offsetX);
    y.set(offsetY);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      className="w-64 bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer"
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: isHover ? rotateX : 0,
        rotateY: isHover ? rotateY : 0,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
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
