import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, Flower2 } from "lucide-react";

interface NavbarProps {
  logo?: string;
  menuItems?: Array<{ label: string; href: string }>;
  onJoinClick?: () => void;
}

const Navbar = ({
  logo = "Loca Fit Studio",
  menuItems = [
    { label: "Ana Sayfa", href: "#" },
    { label: "Dersler", href: "#classes" },
    { label: "Sağlık", href: "#wellness" },
    { label: "Hakkımızda", href: "#about" },
    { label: "İletişim", href: "#contact" },
  ],
  onJoinClick = () => console.log("Join clicked"),
}: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("#");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Update active menu item based on scroll position
      const sections = menuItems.map((item) => item.href.slice(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        if (section) {
          const element = document.getElementById(section);
          if (element) {
            const top = element.offsetTop;
            const height = element.offsetHeight;
            if (scrollPosition >= top && scrollPosition < top + height) {
              setActiveItem(`#${section}`);
              break;
            }
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuItems]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "h-16 bg-white/95 backdrop-blur-sm shadow-lg" : "h-20 bg-transparent"}`}
    >
      <div className="max-w-7xl mx-auto px-4 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <div className="flex items-center space-x-2 text-pink-600 text-2xl font-light tracking-wide group">
            <Flower2 className="w-8 h-8 text-pink-500 transition-all duration-300 group-hover:rotate-45 group-hover:scale-110" />
            <span className="text-pink-600 font-light">{logo}</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={`px-4 py-2 rounded-full text-sm transition-all duration-300
                  ${
                    activeItem === item.href
                      ? "text-white bg-pink-500 font-medium shadow-md shadow-pink-200"
                      : `${isScrolled ? "text-pink-600" : "text-pink-600"} hover:bg-pink-50 font-light`
                  }`}
              >
                {item.label}
              </a>
            ))}
            <Button
              onClick={onJoinClick}
              className="ml-4 bg-pink-500 hover:bg-pink-600 text-white font-light
                transition-all duration-300 hover:scale-105 hover:shadow-xl
                animate-pulse-pink rounded-full px-6"
            >
              Bize Katılın
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`${isScrolled ? "text-pink-600" : "text-white"}`}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-[64px] left-0 right-0 bg-white/95 backdrop-blur-sm shadow-lg border-t border-pink-100">
            <div className="flex flex-col p-4 space-y-2">
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className={`px-4 py-3 rounded-lg text-sm transition-colors
                    ${
                      activeItem === item.href
                        ? "text-white bg-pink-500 font-medium shadow-md shadow-pink-200"
                        : "text-pink-600 hover:bg-pink-50 font-light"
                    }`}
                >
                  {item.label}
                </a>
              ))}
              <Button
                onClick={onJoinClick}
                className="mt-2 w-full bg-pink-500 hover:bg-pink-600 text-white font-light
                  transition-all duration-300 hover:scale-105 rounded-lg shadow-md hover:shadow-xl"
              >
                Bize Katılın
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
