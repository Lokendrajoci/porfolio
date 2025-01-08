"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Poppins, Roboto } from "next/font/google";
import { Menu, X } from "lucide-react";

const poppins = Poppins({
  weight: ["400", "600"],
  subsets: ["latin"],
});

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/" },
    { label: "Projects", href: "/" },
    { label: "Skills", href: "/" },
    { label: "Contact", href: "/" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        poppins.className
      } fixed top-0  z-50 transition-all duration-300 rounded-xl  w-full mt-3
        bg-[#111827] ${scrolled ? "shadow-lg shadow-black/20" : ""}`}
    >
      <div className="max-w-6xl mx-auto px-4  ">
        <div className="flex justify-between items-center h-16">
          <Link
            href="/"
            className={`text-xl font-bold ${roboto.className} text-white transition-colors duration-300 hover:text-[#60a5fa]`}
          >
            My Portfolio
          </Link>

          <div className="hidden lg:flex space-x-8">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="relative group py-2"
              >
                <span className="text-gray-300 transition-colors duration-300 hover:text-white">
                  {item.label}
                </span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#60a5fa] transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100" />
              </Link>
            ))}
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 hover:bg-[#1f2937] rounded-lg transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <X className="w-6 h-6 text-gray-300" />
            ) : (
              <Menu className="w-6 h-6 text-gray-300" />
            )}
          </button>
        </div>

        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            menuOpen
              ? "max-h-96 opacity-100 visible"
              : "max-h-0 opacity-0 invisible"
          }`}
        >
          <div className="py-4 space-y-2">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="block py-2 px-4 text-gray-300 hover:bg-[#1f2937] hover:text-white rounded-lg transition-colors duration-200"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
