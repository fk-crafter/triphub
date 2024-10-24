import { motion } from "framer-motion";
import Image from "next/image";

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
  if (!isOpen) return null;

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-white rounded-lg p-6 shadow-lg"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
      >
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
              <th className="text-left p-2">Prix (€)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2">Billet d'avion</td>
              <td className="p-2">{destination.prices.flight}€</td>
            </tr>
            <tr>
              <td className="p-2">Billet + Hôtel</td>
              <td className="p-2">{destination.prices.flightAndHotel}€</td>
            </tr>
            <tr>
              <td className="p-2">Billet + Hôtel + Activité</td>
              <td className="p-2">{destination.prices.flightHotelActivity}€</td>
            </tr>
          </tbody>
        </table>
        <button
          onClick={onClose}
          className="mt-4 bg-red-400 text-white rounded-md px-4 py-2"
        >
          Fermer
        </button>
      </motion.div>
    </motion.div>
  );
};

export default Modal;
