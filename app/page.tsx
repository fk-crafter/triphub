// Page principale (par exemple, Home.tsx)
import { Hero, Destinations, Footer, Navbar } from "@/components"; // Assure-toi d'importer Destinations

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Destinations /> {/* Ajouter le composant Destinations ici */}
      <Footer />
    </div>
  );
};

export default Home;
