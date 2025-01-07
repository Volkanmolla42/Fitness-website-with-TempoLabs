import React, { useEffect, useRef } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { ClassInfo } from "./ClassCard";
import gsap from "gsap";

interface BookingModalProps extends Partial<ClassInfo> {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const BookingModal = ({
  open,
  onClose,
  onConfirm,
  title = "Yoga Akışı",
  instructor = "Ayşe Yılmaz",
  duration = "60 dk",
  time = "09:00",
  level = "Beginner",
}: BookingModalProps) => {
  const modalRef = useRef(null);
  const contentRef = useRef(null);

  const levelTranslations = {
    Beginner: "Başlangıç",
    Intermediate: "Orta Seviye",
    Advanced: "İleri Seviye",
  };

  useEffect(() => {
    if (open) {
      // Modal entrance animation
      gsap.from(modalRef.current, {
        y: -50,
        opacity: 0,
        duration: 0.5,
        ease: "power3.out",
      });

      // Content stagger animation
      const elements = contentRef.current?.children;
      if (elements) {
        gsap.from(elements, {
          y: 20,
          opacity: 0,
          duration: 0.4,
          stagger: 0.1,
          ease: "power2.out",
        });
      }
    }
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent ref={modalRef} className="sm:max-w-md">
        <div ref={contentRef}>
          <DialogHeader>
            <DialogTitle className="text-xl font-light text-pink-700">
              Ders Rezervasyonu
            </DialogTitle>
            <DialogDescription className="text-pink-600">
              Aşağıdaki ders detaylarını inceleyip rezervasyonunuzu onaylayın
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="p-4 bg-pink-50 rounded-lg space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium text-pink-700">{title}</h3>
                <Calendar className="w-5 h-5 text-pink-500" />
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-pink-600 font-light">Eğitmen</p>
                  <p className="text-pink-700">{instructor}</p>
                </div>
                <div>
                  <p className="text-pink-600 font-light">Süre</p>
                  <p className="text-pink-700">{duration}</p>
                </div>
                <div>
                  <p className="text-pink-600 font-light">Saat</p>
                  <p className="text-pink-700">{time}</p>
                </div>
                <div>
                  <p className="text-pink-600 font-light">Seviye</p>
                  <p className="text-pink-700">{levelTranslations[level]}</p>
                </div>
              </div>
            </div>
            <div className="text-sm text-pink-600">
              <p>Önemli Notlar:</p>
              <ul className="list-disc pl-5 space-y-1 mt-2 text-pink-600/80 font-light">
                <li>Lütfen dersten 10 dakika önce hazır olun</li>
                <li>Spor kıyafetlerinizi getirmeyi unutmayın</li>
                <li>Su şişenizi yanınızda bulundurun</li>
              </ul>
            </div>
          </div>
          <DialogFooter className="flex-col sm:flex-row gap-2 sm:gap-0 mt-6">
            <Button
              variant="outline"
              onClick={onClose}
              className="w-full sm:w-auto border-pink-200 text-pink-700 hover:bg-pink-50"
            >
              İptal
            </Button>
            <Button
              onClick={onConfirm}
              className="w-full sm:w-auto bg-pink-600 hover:bg-pink-700 text-white
                transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              Rezervasyonu Onayla
            </Button>
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;
