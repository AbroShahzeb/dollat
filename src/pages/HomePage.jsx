import TopPart from "../components/TopPart";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import CommunitySection from "../components/CommunitySection";
import MakeMoneySection from "../components/MakeMoneySection";
import WalkThroughSection from "../components/WalkThroughSection";
import ChatGroupSection from "../components/ChatGroupSection";
import ChatSection from "../components/ChatSection";
import FAQSection from "../components/FAQSection";
import TestimonialSection from "../components/TestimonialSection";
import SupportSection from "../components/SupportSection";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <div>
      <TopPart />
      <Navigation />
      <Hero />
      <CommunitySection />
      <MakeMoneySection />
      <WalkThroughSection />
      <ChatGroupSection />
      <ChatSection />
      <FAQSection />
      <TestimonialSection />
      <SupportSection />
      <CTASection />
      <Footer />
    </div>
  );
}

export default HomePage;
