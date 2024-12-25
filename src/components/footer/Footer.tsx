import React from "react";
import { Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-pink-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-light">Serenity</h3>
            <p className="text-pink-200 font-light">
              Your sanctuary for wellness and empowerment
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
            <h4 className="text-lg font-light mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-pink-200 hover:text-pink-100 transition-colors font-light"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-pink-200 hover:text-pink-100 transition-colors font-light"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#classes"
                  className="text-pink-200 hover:text-pink-100 transition-colors font-light"
                >
                  Classes
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-pink-200 hover:text-pink-100 transition-colors font-light"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-light mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-pink-200 hover:text-pink-100 transition-colors font-light"
                >
                  Fitness Classes
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-pink-200 hover:text-pink-100 transition-colors font-light"
                >
                  Spa Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-pink-200 hover:text-pink-100 transition-colors font-light"
                >
                  Wellness Programs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-pink-200 hover:text-pink-100 transition-colors font-light"
                >
                  Personal Training
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-light mb-4">Hours</h4>
            <ul className="space-y-2 text-pink-200 font-light">
              <li>Monday - Friday</li>
              <li>6:00 AM - 10:00 PM</li>
              <li>Saturday - Sunday</li>
              <li>8:00 AM - 8:00 PM</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-pink-800 mt-12 pt-8 text-center">
          <p className="text-pink-200 font-light">
            © {new Date().getFullYear()} Serenity. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
