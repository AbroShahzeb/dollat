import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import CommunitySection from "../components/CommunitySection";
import MakeMoneySection from "../components/MakeMoneySection";

function HomePage() {
  return (
    <div>
      <Navigation />
      <Hero />
      <CommunitySection />
      <MakeMoneySection />
      <Footer />
    </div>
  );
}

export default HomePage;
