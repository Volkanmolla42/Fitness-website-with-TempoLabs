import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import BookingModal from "./BookingModal";

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
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Card className="w-full overflow-hidden group hover:shadow-lg transition-all duration-500 hover:scale-105 border-pink-100">
        <div className="relative h-[200px] overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-pink-950/50 to-transparent transition-colors duration-500" />
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <p className="text-sm font-light">{time}</p>
            <p className="text-lg font-light">{duration}</p>
          </div>
        </div>
        <CardHeader>
          <CardTitle className="text-xl font-light text-pink-700">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-1">
              <p className="text-pink-600 font-light">Eğitmen: {instructor}</p>
              <p className="text-sm text-pink-500 font-light">
                {levelTranslations[level]}
              </p>
            </div>
            <Button
              onClick={() => setIsModalOpen(true)}
              className="w-full bg-pink-600 hover:bg-pink-700 text-white font-light
                transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              Rezervasyon Yap
            </Button>
          </div>
        </CardContent>
      </Card>

      <BookingModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={() => {
          onBookClass();
          setIsModalOpen(false);
        }}
        title={title}
        instructor={instructor}
        duration={duration}
        time={time}
        level={level}
      />
    </>
  );
};

export default ClassCard;
