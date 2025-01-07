import React from "react";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  headline?: string;
  subheadline?: string;
  ctaText?: string;
  onCtaClick?: () => void;
}

const HeroSection = ({
  headline = "Kendini Yeniden Keşfet",
  subheadline = "Zarafet ve sağlığın buluştuğu özel fitness deneyiminize hoş geldiniz",
  ctaText = "Ücretsiz Deneme Dersi",
  onCtaClick = () => console.log("CTA clicked"),
}: HeroSectionProps) => {
  return (
    <section
      id="home"
      className="relative w-full h-[100svh] bg-gradient-to-br from-rose-50 via-pink-50 to-rose-100 overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-pink-100/50 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-rose-100/50 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-40 right-40 w-48 h-48 bg-pink-200/30 rounded-full blur-2xl" />
      <div className="absolute bottom-40 left-40 w-64 h-64 bg-rose-200/30 rounded-full blur-2xl" />

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-4 text-center">
        {/* Decorative Top Line */}
        <div className="mb-12">
          <div className="flex items-center space-x-4">
            <div className="w-24 h-[1px] bg-pink-300" />
            <div className="w-3 h-3 rounded-full bg-pink-400" />
            <div className="w-24 h-[1px] bg-pink-300" />
          </div>
        </div>

        <span className="text-rose-400 text-xl font-light italic mb-6">
          Serenity Fitness
        </span>

        <h1 className="mb-6 text-4xl font-light text-pink-900 md:text-6xl lg:text-7xl tracking-wide font-serif">
          {headline}
        </h1>
        <p className="max-w-2xl mb-12 text-lg text-pink-700 md:text-xl font-light italic">
          {subheadline}
        </p>
        <Button
          onClick={onCtaClick}
          className="px-10 py-6 text-lg font-light text-white transition-all duration-300
            bg-pink-400 hover:bg-pink-500
            shadow-[0_0_30px_rgba(236,72,153,0.3)]
            hover:shadow-[0_0_40px_rgba(236,72,153,0.4)]
            rounded-full border border-pink-200"
        >
          {ctaText}
        </Button>

        {/* Decorative Bottom Line */}
        <div className="mt-12">
          <div className="flex items-center space-x-4">
            <div className="w-24 h-[1px] bg-pink-300" />
            <div className="w-2 h-2 rounded-full bg-pink-400" />
            <div className="w-24 h-[1px] bg-pink-300" />
          </div>
        </div>
      </div>

      {/* Decorative Corner Elements */}
      <div className="absolute top-8 left-8 w-24 h-24 border-l-2 border-t-2 border-pink-200 rounded-tl-3xl" />
      <div className="absolute bottom-8 right-8 w-24 h-24 border-r-2 border-b-2 border-pink-200 rounded-br-3xl" />
    </section>
  );
};

export default HeroSection;
