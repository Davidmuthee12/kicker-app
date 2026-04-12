import CallAction from "@/components/HomePage/CallAction";
import HeroSection from "@/components/HomePage/HeroSection";
import JoinSection from "@/components/HomePage/JoinSection";
import Navbar from "@/components/HomePage/Navbar";
import Services from "@/components/HomePage/Service";

export default function Home() {
  return (
    <div className="pt-20">
      <Navbar />
      <HeroSection />
      <CallAction />
      <Services />
      <JoinSection />
    </div>
  );
}
