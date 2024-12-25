import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export interface ClassInfo {
  title: string;
  instructor: string;
  duration: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  imageUrl: string;
  time: string;
}

interface ClassCardProps extends ClassInfo {
  onBookClass?: () => void;
}

const levelTranslations = {
  Beginner: "Başlangıç",
  Intermediate: "Orta Seviye",
  Advanced: "İleri Seviye",
};

const ClassCard = ({
  title = "Yoga Akışı",
  instructor = "Ayşe Yılmaz",
  duration = "60 dk",
  level = "Beginner",
  imageUrl = "https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?q=80&w=1920&auto=format&fit=crop",
  time = "09:00",
  onBookClass = () => console.log("Book class clicked"),
}: ClassCardProps) => {
  return (
    <Card className="w-[300px] overflow-hidden group hover:shadow-lg transition-all duration-300 border-pink-100">
      <div className="relative h-[200px] overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-pink-950/50 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <p className="text-sm font-light">{time}</p>
          <p className="text-lg font-light">{duration}</p>
        </div>
      </div>
      <CardHeader>
        <CardTitle className="text-xl font-light text-pink-900">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-1">
            <p className="text-pink-700 font-light">Eğitmen: {instructor}</p>
            <p className="text-sm text-pink-600 font-light">
              {levelTranslations[level]}
            </p>
          </div>
          <Button
            onClick={onBookClass}
            className="w-full bg-pink-700 hover:bg-pink-800 text-white font-light
              shadow-[0_0_15px_rgba(219,39,119,0.3)] transition-all duration-300
              hover:shadow-[0_0_20px_rgba(219,39,119,0.4)]"
          >
            Rezervasyon Yap
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ClassCard;
