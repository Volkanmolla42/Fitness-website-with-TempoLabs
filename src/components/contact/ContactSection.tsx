import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="w-full py-20 px-4 bg-gradient-to-b from-white to-pink-50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-pink-900 mb-4">İletişim</h2>
          <p className="text-pink-700 text-lg max-w-2xl mx-auto font-light">
            Sizden haber almayı çok isteriz. Her türlü sorunuz için bize ulaşın.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* İletişim Formu */}
          <div className="space-y-6">
            <div className="space-y-4">
              <Input
                type="text"
                placeholder="Adınız"
                className="border-pink-200 focus:border-pink-400"
              />
              <Input
                type="email"
                placeholder="E-posta Adresiniz"
                className="border-pink-200 focus:border-pink-400"
              />
              <Textarea
                placeholder="Mesajınız"
                className="min-h-[150px] border-pink-200 focus:border-pink-400"
              />
            </div>
            <Button
              className="w-full bg-pink-700 hover:bg-pink-800 text-white font-light
                shadow-[0_0_15px_rgba(219,39,119,0.3)] transition-all duration-300
                hover:shadow-[0_0_20px_rgba(219,39,119,0.4)]"
            >
              Mesaj Gönder
            </Button>
          </div>

          {/* İletişim Bilgileri */}
          <div className="space-y-8 lg:pl-12">
            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-pink-700 mt-1" />
              <div>
                <h3 className="text-xl font-light text-pink-900 mb-2">Adres</h3>
                <p className="text-pink-700 font-light">
                  Serenity Caddesi No: 123
                  <br />
                  Sağlık Mahallesi
                  <br />
                  İstanbul, 34000
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Phone className="w-6 h-6 text-pink-700 mt-1" />
              <div>
                <h3 className="text-xl font-light text-pink-900 mb-2">
                  Telefon
                </h3>
                <p className="text-pink-700 font-light">+90 (212) 555 0123</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Mail className="w-6 h-6 text-pink-700 mt-1" />
              <div>
                <h3 className="text-xl font-light text-pink-900 mb-2">
                  E-posta
                </h3>
                <p className="text-pink-700 font-light">
                  iletisim@serenity.com
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
