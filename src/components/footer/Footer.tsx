import React from "react";
import { Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-pink-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-light">Loca Fit Studio</h3>
            <p className="text-pink-200 font-light">
              Sağlık ve güçlenme için sığınağınız
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-pink-200 hover:text-pink-100 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-pink-200 hover:text-pink-100 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-pink-200 hover:text-pink-100 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-light mb-4">Hızlı Bağlantılar</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-pink-200 hover:text-pink-100 transition-colors font-light"
                >
                  Ana Sayfa
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-pink-200 hover:text-pink-100 transition-colors font-light"
                >
                  Hakkında
                </a>
              </li>
              <li>
                <a
                  href="#classes"
                  className="text-pink-200 hover:text-pink-100 transition-colors font-light"
                >
                  Sınıflar
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-pink-200 hover:text-pink-100 transition-colors font-light"
                >
                  İletişim
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-light mb-4">Hizmetler</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-pink-200 hover:text-pink-100 transition-colors font-light"
                >
                  Fitness Dersleri
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-pink-200 hover:text-pink-100 transition-colors font-light"
                >
                  Spa Hizmetleri
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-pink-200 hover:text-pink-100 transition-colors font-light"
                >
                  Sağlık Programları
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-pink-200 hover:text-pink-100 transition-colors font-light"
                >
                  Kişisel Antrenman
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-light mb-4">Çalışma Saatleri</h4>
            <ul className="space-y-2 text-pink-200 font-light">
              <li>Pazartesi - Cuma</li>
              <li>6:00 AM - 10:00 PM</li>
              <li>Cumartesi - Pazar</li>
              <li>8:00 AM - 8:00 PM</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-pink-800 mt-12 pt-8 text-center">
          <p className="text-pink-200 font-light">
            {new Date().getFullYear()} Loca Fit Studio. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
