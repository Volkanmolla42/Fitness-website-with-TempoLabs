import React from "react";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

interface HeroSectionProps {
  headline?: string;
  subheadline?: string;
  ctaText?: string;
  onCtaClick?: () => void;
}

const HeroSection = ({
  headline = "Güçlü, Fit ve Özgür",
  subheadline = "Loca Fit Studio'da kendi dönüşüm yolculuğunuza başlayın",
  ctaText = "Ücretsiz Deneme Dersi",
  onCtaClick = () => console.log("CTA clicked"),
}: HeroSectionProps) => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="https://images.unsplash.com/photo-1593476123561-9516f2097158?q=80&w=2940&auto=format&fit=crop"
          alt="Background"
          className="object-cover w-full h-full scale-105 animate-slow-zoom"
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
      </div>

      {/* Animated Shapes */}
      <div className="absolute inset-0 overflow-hidden mix-blend-soft-light">
        <div className="absolute top-20 left-10 w-32 h-32 bg-pink-500/20 rounded-full animate-float delay-100" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-pink-500/20 rounded-full animate-float delay-300" />
        <div className="absolute top-40 right-20 w-24 h-24 bg-pink-500/20 rounded-full animate-float delay-500" />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col items-start justify-center h-full px-8 md:px-16 lg:px-24 max-w-7xl mx-auto">
        <div className="w-full md:w-2/3 lg:w-1/2 space-y-6">
          <h1 className="text-4xl font-light md:text-6xl lg:text-7xl tracking-wide text-white animate-fade-in">
            {headline}
          </h1>
          <p className="text-lg text-white/90 md:text-xl font-light max-w-xl animate-fade-in-delay">
            {subheadline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-delay-2">
            <Button
              onClick={onCtaClick}
              className="group px-8 py-6 text-lg font-light text-white 
                bg-pink-600 hover:bg-pink-700 hover:scale-105 hover:shadow-xl
                rounded-full animate-pulse-pink transition-all duration-300"
            >
              <Sparkles className="w-5 h-5 mr-2 transition-transform group-hover:rotate-12" />
              {ctaText}
            </Button>
            <Button
              variant="outline"
              className="px-8 py-6 text-lg font-light text-white border-white/30 
                hover:bg-white/10 hover:border-white transition-all duration-300"
            >
              Program Detayları
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent" />
    </div>
  );
};

export default HeroSection;
