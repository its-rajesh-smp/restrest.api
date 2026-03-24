import { Footer } from "@/components";
import APITable from "./APITable";
import Features from "./Features";
import Hero from "./Hero";
import HowItWorks from "./HowItWorks";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <APITable />
      <HowItWorks />
      <Features />
      <Footer />
    </div>
  );
};

export default HomePage;
