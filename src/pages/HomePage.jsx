import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import CommunitySection from "../components/CommunitySection";
import MakeMoneySection from "../components/MakeMoneySection";
import WalkThroughSection from "../components/WalkThroughSection";
import FAQSection from "../components/FAQSection";

function HomePage() {
  return (
    <div>
      <Navigation />
      <Hero />
      <CommunitySection />
      <MakeMoneySection />
      <WalkThroughSection />
      <FAQSection />
      <Footer />
    </div>
  );
}

export default HomePage;
