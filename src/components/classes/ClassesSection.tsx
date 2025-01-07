import React, { useEffect, useRef } from "react";
import ClassCard, { ClassInfo } from "./ClassCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ClassesSectionProps {
  classes?: ClassInfo[];
  onBookClass?: (classTitle: string) => void;
}

const ClassesSection = ({
  classes = [
    {
      title: "EMS Training",
      instructor: "Selin Yıldız",
      duration: "25 dk",
      level: "Beginner",
      imageUrl:
        "https://images.unsplash.com/photo-1518644961665-ed172691aaa1?q=80&w=2940&auto=format&fit=crop",
      time: "08:00",
    },
    {
      title: "Sabah Yogası",
      instructor: "Ayşe Yılmaz",
      duration: "60 dk",
      level: "Beginner",
      imageUrl:
        "https://images.unsplash.com/photo-1588286840104-8957b019727f?q=80&w=2940&auto=format&fit=crop",
      time: "09:00",
    },
    {
      title: "Güçlü Pilates",
      instructor: "Elif Demir",
      duration: "45 dk",
      level: "Intermediate",
      imageUrl:
        "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2940&auto=format&fit=crop",
      time: "10:30",
    },
    {
      title: "Dans Kardiyo",
      instructor: "Zeynep Kaya",
      duration: "50 dk",
      level: "Beginner",
      imageUrl:
        "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?q=80&w=2940&auto=format&fit=crop",
      time: "14:00",
    },
    {
      title: "İleri HIIT",
      instructor: "Merve Aydın",
      duration: "40 dk",
      level: "Advanced",
      imageUrl:
        "https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=2940&auto=format&fit=crop",
      time: "16:30",
    },
  ],
  onBookClass = (classTitle: string) =>
    console.log(`Booking class: ${classTitle}`),
}: ClassesSectionProps) => {
  const headerRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    // Header animation
    gsap.from(headerRef.current, {
      scrollTrigger: {
        trigger: headerRef.current,
        start: "top 80%",
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    // Cards stagger animation
    const cards = cardsRef.current?.children;
    if (cards) {
      gsap.from(cards, {
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 70%",
        },
        y: 100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      });
    }
  }, []);

  return (
    <section
      id="classes"
      className="w-full py-20 bg-gradient-to-b from-white to-pink-50"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className="text-center mb-12">
          <h2 className="text-4xl font-light text-pink-800 mb-4">
            Derslerimiz
          </h2>
          <p className="text-pink-700 text-lg max-w-2xl mx-auto font-light">
            Dönüştürücü fitness deneyimlerimizi keşfedin
          </p>
        </div>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 justify-items-center"
        >
          {classes.map((classInfo, index) => (
            <div key={index} className="w-full max-w-[300px]">
              <ClassCard
                {...classInfo}
                onBookClass={() => onBookClass(classInfo.title)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClassesSection;
