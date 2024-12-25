import React from "react";
import ClassCard, { ClassInfo } from "./ClassCard";

interface ClassesSectionProps {
  classes?: ClassInfo[];
  onBookClass?: (classTitle: string) => void;
}

const ClassesSection = ({
  classes = [
    {
      title: "Sabah Yogası",
      instructor: "Ayşe Yılmaz",
      duration: "60 dk",
      level: "Beginner",
      imageUrl:
        "https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?q=80&w=1920&auto=format&fit=crop",
      time: "09:00",
    },
    {
      title: "Güçlü Pilates",
      instructor: "Elif Demir",
      duration: "45 dk",
      level: "Intermediate",
      imageUrl:
        "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1920&auto=format&fit=crop",
      time: "10:30",
    },
    {
      title: "Dans Kardiyo",
      instructor: "Zeynep Kaya",
      duration: "50 dk",
      level: "Beginner",
      imageUrl:
        "https://images.unsplash.com/photo-1509259305526-c93e808b8899?q=80&w=1920&auto=format&fit=crop",
      time: "14:00",
    },
    {
      title: "İleri HIIT",
      instructor: "Merve Aydın",
      duration: "40 dk",
      level: "Advanced",
      imageUrl:
        "https://images.unsplash.com/photo-1549576490-b0b4831ef60a?q=80&w=1920&auto=format&fit=crop",
      time: "16:30",
    },
  ],
  onBookClass = (classTitle: string) =>
    console.log(`Booking class: ${classTitle}`),
}: ClassesSectionProps) => {
  return (
    <section
      id="classes"
      className="w-full py-20 px-4 bg-gradient-to-b from-white to-pink-50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-light text-pink-900 mb-4">
            Derslerimiz
          </h2>
          <p className="text-pink-700 text-lg max-w-2xl mx-auto font-light">
            Dönüştürücü fitness deneyimlerimizi keşfedin
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
          {classes.map((classInfo, index) => (
            <ClassCard
              key={index}
              {...classInfo}
              onBookClass={() => onBookClass(classInfo.title)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClassesSection;
