import { Hero, Destinations, Navbar, LogosCarousel } from "@/components";
import { destinations } from "@/constants";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <LogosCarousel />
      <Destinations />
    </div>
  );
};

export default Home;
