import React from "react";
import MembershipCard from "./MembershipCard";

interface MembershipPlan {
  title: string;
  price: string;
  description: string;
  features: Array<{ text: string; included: boolean }>;
  highlighted?: boolean;
}

interface MembershipSectionProps {
  plans?: MembershipPlan[];
  onPlanSelect?: (planTitle: string) => void;
}

const MembershipSection = ({
  plans = [
    {
      title: "Başlangıç",
      price: "₺599",
      description: "Sağlık yolculuğunuza başlayın",
      features: [
        { text: "Sağlık alanlarına erişim", included: true },
        { text: "Temel fitness dersleri", included: true },
        { text: "Spa konseptli soyunma odası", included: true },
        { text: "Kişisel sağlık koçu", included: false },
        { text: "Beslenme danışmanlığı", included: false },
      ],
    },
    {
      title: "Premium",
      price: "₺999",
      description: "Deneyiminizi yükseltin",
      features: [
        { text: "Sağlık alanlarına erişim", included: true },
        { text: "Tüm özel dersler", included: true },
        { text: "Lüks soyunma odası imkanları", included: true },
        { text: "2 Sağlık koçluğu seansı", included: true },
        { text: "Temel beslenme danışmanlığı", included: true },
      ],
      highlighted: true,
    },
    {
      title: "VIP",
      price: "₺1499",
      description: "En lüks deneyim",
      features: [
        { text: "24/7 Tüm alanlara erişim", included: true },
        { text: "Öncelikli ders rezervasyonu", included: true },
        { text: "VIP spa imkanları", included: true },
        { text: "Sınırsız sağlık koçluğu", included: true },
        { text: "Tam kapsamlı sağlık planı", included: true },
      ],
    },
  ],
  onPlanSelect = (planTitle: string) =>
    console.log(`Selected plan: ${planTitle}`),
}: MembershipSectionProps) => {
  return (
    <section className="w-full min-h-[600px] py-20 px-4 bg-gradient-to-b from-pink-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-light text-pink-900 mb-4">
            Üyelik Paketleri
          </h2>
          <p className="text-pink-700 text-lg max-w-2xl mx-auto font-light">
            Özenle hazırlanmış üyelik seçeneklerimizle sağlık yolculuğunuzu
            seçin
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 justify-center items-center md:items-stretch">
          {plans.map((plan, index) => (
            <MembershipCard
              key={index}
              title={plan.title}
              price={plan.price}
              description={plan.description}
              features={plan.features}
              highlighted={plan.highlighted}
              onSelect={() => onPlanSelect(plan.title)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MembershipSection;
