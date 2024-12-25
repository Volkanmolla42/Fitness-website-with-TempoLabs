import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Flower2, Heart, Brain, Salad } from "lucide-react";

const services = [
  {
    icon: Flower2,
    title: "Spa Hizmetleri",
    description: "Vücut ve ruh için lüks bakım",
  },
  {
    icon: Heart,
    title: "Bütünsel Sağlık",
    description: "Tam bir iyilik hali için bütünleşik programlar",
  },
  {
    icon: Brain,
    title: "Mindfulness",
    description: "Meditasyon ve stres giderme uygulamaları",
  },
  {
    icon: Salad,
    title: "Beslenme",
    description: "Kişiselleştirilmiş beslenme danışmanlığı",
  },
];

const WellnessSection = () => {
  return (
    <section
      id="wellness"
      className="w-full py-20 px-4 bg-gradient-to-b from-white to-pink-50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-pink-900 mb-4">
            Sağlık Hizmetlerimiz
          </h2>
          <p className="text-pink-700 text-lg max-w-2xl mx-auto font-light">
            Sağlık ve öz bakım için bütünsel yaklaşımımızı keşfedin
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-pink-100 hover:shadow-lg transition-all duration-300"
            >
              <CardContent className="pt-6 text-center">
                <div className="mb-4 flex justify-center">
                  <service.icon className="w-12 h-12 text-pink-700" />
                </div>
                <h3 className="text-xl font-light text-pink-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-pink-600 font-light">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WellnessSection;
