import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const formRef = useRef(null);
  const infoRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    // Başlık animasyonu
    gsap.fromTo(
      headerRef.current,
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 80%",
          end: "top 60%",
          scrub: 1,
        },
      }
    );

    // Form animasyonu
    const formElements = formRef.current?.querySelectorAll("input, textarea, button");
    gsap.fromTo(
      formElements,
      {
        y: 30,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 0.8,
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 70%",
          end: "top 40%",
          scrub: 1,
        },
      }
    );

    // İletişim bilgileri animasyonu
    const infoItems = infoRef.current?.children;
    gsap.fromTo(
      infoItems,
      {
        x: 50,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 0.8,
        scrollTrigger: {
          trigger: infoRef.current,
          start: "top 70%",
          end: "top 40%",
          scrub: 1,
        },
      }
    );

    // Hover efektleri
    if (infoItems) {
      Array.from(infoItems).forEach((item: HTMLElement) => {
        item.addEventListener("mouseenter", () => {
          gsap.to(item, {
            scale: 1.05,
            duration: 0.3,
            ease: "power2.out",
          });
        });

        item.addEventListener("mouseleave", () => {
          gsap.to(item, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
          });
        });
      });
    }
  }, []);

  return (
    <section id="contact" className="w-full py-20 bg-gradient-to-b from-pink-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className="text-center mb-12">
          <h2 className="text-4xl font-light text-pink-900 mb-4">İletişim</h2>
          <p className="text-pink-700 text-lg max-w-2xl mx-auto font-light">
            Size yardımcı olmak için buradayız
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div ref={formRef} className="space-y-6">
            <Input type="text" placeholder="Adınız" className="w-full" />
            <Input type="email" placeholder="E-posta Adresiniz" className="w-full" />
            <Textarea placeholder="Mesajınız" className="w-full min-h-[150px]" />
            <Button className="w-full bg-pink-600 hover:bg-pink-700 text-white">
              Gönder
            </Button>
          </div>

          <div ref={infoRef} className="space-y-8">
            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-pink-600 mt-1" />
              <div>
                <h3 className="text-xl font-light text-pink-900 mb-2">Adres</h3>
                <p className="text-pink-700 font-light">
                  istiklal Caddesi No: 123
                  <br />
                  Sağlık Mahallesi
                  <br />
                  İstanbul, Türkiye
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Phone className="w-6 h-6 text-pink-600 mt-1" />
              <div>
                <h3 className="text-xl font-light text-pink-900 mb-2">
                  Telefon
                </h3>
                <p className="text-pink-700 font-light">+90 (212) 345 67 89</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Mail className="w-6 h-6 text-pink-600 mt-1" />
              <div>
                <h3 className="text-xl font-light text-pink-900 mb-2">
                  E-posta
                </h3>
                <p className="text-pink-700 font-light">
                  iletisim@locafit.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
