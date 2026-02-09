import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StorySection from "@/components/StorySection";
import VisionSection from "@/components/VisionSection";
import ImpactGallery from "@/components/ImpactGallery";
import FoundersSection from "@/components/FoundersSection";
import ConnectSection from "@/components/ConnectSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <StorySection />
      <VisionSection />
      <ImpactGallery />
      <FoundersSection />
      <ConnectSection />
      <Footer />
    </main>
  );
};

export default Index;
