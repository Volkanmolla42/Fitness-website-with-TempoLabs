import React from "react";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="w-full py-20 px-4 bg-gradient-to-b from-pink-50 to-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-light text-pink-900">Hikayemiz</h2>
            <p className="text-pink-700 text-lg font-light leading-relaxed">
              Kadınların güçlerini ve sağlıklarını besleyebilecekleri bir
              sığınak yaratma vizyonuyla kurulan Serenity, güçlenme ve dönüşüm
              için bir topluluk haline geldi.
            </p>
            <p className="text-pink-700 text-lg font-light leading-relaxed">
              Son teknoloji tesisimiz, lüks ve işlevselliği bir araya getirerek,
              zihin, beden ve ruhun uyum içinde gelişebileceği bir alan sunuyor.
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
          <div className="relative h-[600px] rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=1920&auto=format&fit=crop"
              alt="Hakkımızda"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-pink-950/30 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
