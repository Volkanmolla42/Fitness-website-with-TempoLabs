import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Menu } from "lucide-react";

interface NavbarProps {
  logo?: string;
  menuItems?: Array<{ label: string; href: string }>;
  onJoinClick?: () => void;
}

const Navbar = ({
  logo = "Serenity",
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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-20 ${
        isScrolled ? "bg-white/90 backdrop-blur-lg shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <div className="text-pink-900 text-2xl font-light tracking-wide">
            {logo}
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList>
                {menuItems.map((item, index) => (
                  <NavigationMenuItem key={index}>
                    <a
                      href={item.href}
                      className="text-pink-700 hover:text-pink-900 px-4 py-2 text-sm transition-colors font-light"
                    >
                      {item.label}
                    </a>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Join Button */}
          <div className="hidden md:block">
            <Button
              onClick={onJoinClick}
              className="bg-pink-700 hover:bg-pink-800 text-white font-light
                shadow-[0_0_15px_rgba(219,39,119,0.3)] transition-all duration-300
                hover:shadow-[0_0_20px_rgba(219,39,119,0.4)]"
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
              className="text-pink-900"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-white/95 backdrop-blur-lg border-t border-pink-100">
            <div className="flex flex-col p-4 space-y-4">
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-pink-700 hover:text-pink-900 py-2 text-sm transition-colors font-light"
                >
                  {item.label}
                </a>
              ))}
              <Button
                onClick={onJoinClick}
                className="bg-pink-700 hover:bg-pink-800 text-white w-full font-light
                  shadow-[0_0_15px_rgba(219,39,119,0.3)] transition-all duration-300
                  hover:shadow-[0_0_20px_rgba(219,39,119,0.4)]"
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
