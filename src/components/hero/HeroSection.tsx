import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import gsap from "gsap";

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
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);
  const decorRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Ana animasyon timeline'ı
    tl.fromTo(
      decorRef.current,
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.5 }
    )
      .fromTo(
        titleRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
        "-=1"
      )
      .fromTo(
        subtitleRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
        "-=0.8"
      )
      .fromTo(
        buttonRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        "-=0.6"
      );

    // Arka plan elementlerinin sürekli animasyonu
    gsap.to(".bg-element", {
      y: "random(-20, 20)",
      x: "random(-20, 20)",
      duration: "random(3, 5)",
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: {
        amount: 2,
        from: "random",
      },
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative w-full h-[100svh] bg-gradient-to-br from-rose-50 via-pink-50 to-rose-100 overflow-hidden"
    >
      {/* Dekoratif Elementler */}
      <div ref={decorRef}>
        <div className="bg-element absolute top-20 left-20 w-72 h-72 bg-pink-100/50 rounded-full blur-3xl" />
        <div className="bg-element absolute bottom-20 right-20 w-96 h-96 bg-rose-100/50 rounded-full blur-3xl" />
        <div className="bg-element absolute top-40 right-40 w-48 h-48 bg-pink-200/30 rounded-full blur-2xl" />
        <div className="bg-element absolute bottom-40 left-40 w-64 h-64 bg-rose-200/30 rounded-full blur-2xl" />
      </div>

      {/* İçerik */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-4 text-center">
        {/* Dekoratif Üst Çizgi */}
        <div className="mb-12">
          <div className="flex items-center space-x-4">
            <div className="w-24 h-[1px] bg-pink-300" />
            <div className="w-3 h-3 rounded-full bg-pink-400" />
            <div className="w-24 h-[1px] bg-pink-300" />
          </div>
        </div>

        <span ref={titleRef} className="text-rose-400 text-xl font-light italic mb-6">
          Loca Fit Studio
        </span>

        <h1 ref={subtitleRef} className="mb-6 text-4xl font-light text-pink-900 md:text-6xl lg:text-7xl tracking-wide font-serif">
          {headline}
        </h1>
        <p className="max-w-2xl mb-12 text-lg text-pink-700 md:text-xl font-light italic">
          {subheadline}
        </p>
        <Button
          ref={buttonRef}
          onClick={onCtaClick}
          className="px-10 py-6 text-lg font-light text-white transition-all duration-300
            bg-pink-500 hover:bg-pink-600 hover:scale-105 hover:shadow-xl
            animate-pulse-pink rounded-full"
        >
          {ctaText}
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
