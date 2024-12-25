import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface MembershipFeature {
  text: string;
  included: boolean;
}

interface MembershipCardProps {
  title?: string;
  price?: string;
  description?: string;
  features?: MembershipFeature[];
  onSelect?: () => void;
  highlighted?: boolean;
}

const MembershipCard = ({
  title = "Başlangıç",
  price = "₺599",
  description = "Sağlık yolculuğunuza başlayın",
  features = [
    { text: "Sağlık alanlarına erişim", included: true },
    { text: "Temel fitness dersleri", included: true },
    { text: "Spa konseptli soyunma odası", included: true },
    { text: "Kişisel sağlık koçu", included: false },
    { text: "Beslenme danışmanlığı", included: false },
  ],
  onSelect = () => console.log("Plan selected"),
  highlighted = false,
}: MembershipCardProps) => {
  return (
    <Card
      className={`w-[350px] h-[500px] backdrop-blur-lg border border-pink-200 bg-white/95 transform transition-all duration-300 hover:scale-105 ${
        highlighted ? "ring-2 ring-pink-400 shadow-lg shadow-pink-300/20" : ""
      }`}
    >
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-light text-pink-900">
          {title}
        </CardTitle>
        <CardDescription className="text-pink-700">
          {description}
        </CardDescription>
        <div className="mt-4">
          <span className="text-4xl font-light text-pink-900">{price}</span>
          <span className="text-pink-600 ml-2">/ay</span>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center space-x-3">
            <Check
              className={`w-5 h-5 ${feature.included ? "text-pink-700" : "text-pink-300"}`}
            />
            <span
              className={`${feature.included ? "text-pink-900" : "text-pink-400"} font-light`}
            >
              {feature.text}
            </span>
          </div>
        ))}
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button
          onClick={onSelect}
          className="w-full bg-pink-700 hover:bg-pink-800 text-white font-light
            shadow-[0_0_15px_rgba(219,39,119,0.3)] transition-all duration-300
            hover:shadow-[0_0_20px_rgba(219,39,119,0.4)]"
        >
          Paketi Seç
        </Button>
      </CardFooter>
    </Card>
  );
};

export default MembershipCard;
