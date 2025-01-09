import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    // Ana bölüm animasyonu
    gsap.fromTo(
      sectionRef.current,
      {
        backgroundColor: "rgba(255, 255, 255, 0)",
      },
      {
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 20%",
          scrub: 1,
        },
      }
    );

    // Metin animasyonu
    gsap.fromTo(
      textRef.current?.children,
      {
        x: -100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 70%",
          end: "top 30%",
          scrub: 1,
        },
      }
    );

    // Görsel animasyonu
    gsap.fromTo(
      imageRef.current,
      {
        scale: 0.8,
        opacity: 0,
        rotate: -10,
      },
      {
        scale: 1,
        opacity: 1,
        rotate: 0,
        duration: 1,
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 70%",
          end: "top 30%",
          scrub: 1,
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="w-full py-20 bg-gradient-to-b from-pink-50/50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div ref={textRef} className="space-y-6">
            <h2 className="text-4xl font-light text-pink-900">Hikayemiz</h2>
            <p className="text-pink-700 text-lg font-light leading-relaxed">
              Kadınların güçlerini ve sağlıklarını besleyebilecekleri bir
              sığınak yaratma vizyonuyla kurulan Loca Fit Studio, zihin, güçlenme ve dönüşüm
              için bir topluluk haline geldi.
            </p>
            <p className="text-pink-700 text-lg font-light leading-relaxed">
              Modern ekipmanlarımız, uzman eğitmenlerimiz ve size özel
              programlarımızla, fitness hedeflerinize ulaşmanız için yanınızdayız.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-4">
              <div>
                <h3 className="text-3xl font-light text-pink-900 mb-2">
                  1000+
                </h3>
                <p className="text-pink-600 font-light">Aktif Üye</p>
              </div>
              <div>
                <h3 className="text-3xl font-light text-pink-900 mb-2">50+</h3>
                <p className="text-pink-600 font-light">Uzman Eğitmen</p>
              </div>
            </div>
            <Button
              className="bg-pink-700 hover:bg-pink-800 text-white font-light
                shadow-[0_0_15px_rgba(219,39,119,0.3)] transition-all duration-300
                hover:shadow-[0_0_20px_rgba(219,39,119,0.4)]"
            >
              Daha Fazla Bilgi
            </Button>
          </div>
          <div
            ref={imageRef}
            className="relative aspect-square rounded-full overflow-hidden shadow-2xl"
          >
            <img
              src="https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?q=80&w=2940&auto=format&fit=crop"
              alt="Fitness Studio"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-pink-500/20 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
