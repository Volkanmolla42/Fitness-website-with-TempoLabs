import React from "react";
import Navbar from "./navigation/Navbar";
import HeroSection from "./hero/HeroSection";
import ClassesSection from "./classes/ClassesSection";
import WellnessSection from "./wellness/WellnessSection";
import AboutSection from "./about/AboutSection";
import ContactSection from "./contact/ContactSection";
import Footer from "./footer/Footer";

interface HomePageProps {
  onJoinClick?: () => void;
  onTrialClick?: () => void;
  onBookClass?: (classTitle: string) => void;
}

const HomePage = ({
  onJoinClick = () => console.log("Join clicked"),
  onTrialClick = () => console.log("Trial clicked"),
  onBookClass = (classTitle: string) =>
    console.log(`Booked class: ${classTitle}`),
}: HomePageProps) => {
  return (
    <div className="min-h-screen bg-pink-50">
      <Navbar onJoinClick={onJoinClick} />
      <main>
        <HeroSection onCtaClick={onTrialClick} />
        <ClassesSection onBookClass={onBookClass} />
        <WellnessSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />

      {/* Gradient background effect */}
      <div className="fixed inset-0 -z-10 h-full w-full bg-pink-50 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(219,39,119,0.1),rgba(255,255,255,0))]" />
    </div>
  );
};

export default HomePage;
