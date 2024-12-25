import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  videoUrl?: string;
  headline?: string;
  subheadline?: string;
  ctaText?: string;
  onCtaClick?: () => void;
}

const HeroSection = ({
  videoUrl = "https://player.vimeo.com/external/459848489.sd.mp4?s=c9a8d51f5c38c048d2e19403a46a504c9805ad5c&profile_id=164&oauth2_token_id=57447761",
  headline = "Gücünüzü Besleyin",
  subheadline = "Sağlık ve güçlenme merkezimize hoş geldiniz",
  ctaText = "Yolculuğa Başlayın",
  onCtaClick = () => console.log("CTA clicked"),
}: HeroSectionProps) => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    const video = document.querySelector("video");
    if (video) {
      video.addEventListener("loadeddata", () => setIsVideoLoaded(true));
    }
    return () => {
      if (video) {
        video.removeEventListener("loadeddata", () => setIsVideoLoaded(true));
      }
    };
  }, []);

  return (
    <div className="relative w-full h-[800px] bg-pink-100 overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className={`object-cover w-full h-full transition-opacity duration-1000 ${isVideoLoaded ? "opacity-40" : "opacity-0"}`}
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-4 text-center">
        <h1 className="mb-6 text-4xl font-light text-pink-950 md:text-6xl lg:text-7xl animate-fade-in tracking-wide">
          {headline}
        </h1>
        <p className="max-w-2xl mb-8 text-lg text-pink-800 md:text-xl font-light">
          {subheadline}
        </p>
        <Button
          onClick={onCtaClick}
          className="px-8 py-6 text-lg font-light text-white transition-all duration-300
            bg-pink-700 hover:bg-pink-800
            shadow-[0_0_20px_rgba(219,39,119,0.3)]
            hover:shadow-[0_0_30px_rgba(219,39,119,0.4)]
            rounded-full"
        >
          {ctaText}
        </Button>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-pink-100/70 via-pink-50/50 to-pink-100/70" />
    </div>
  );
};

export default HeroSection;
