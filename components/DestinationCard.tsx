// DestinationCard.tsx
import Image from "next/image";

interface DestinationCardProps {
  destination: string;
  imageUrl: string;
}

const DestinationCard = ({ destination, imageUrl }: DestinationCardProps) => {
  return (
    <div className="destination-card">
      <Image
        src={imageUrl}
        alt={destination}
        width={300}
        height={200}
        className="object-cover"
      />
      <h3>{destination}</h3>
    </div>
  );
};

export default DestinationCard;
