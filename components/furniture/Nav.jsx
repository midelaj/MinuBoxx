"use client";
import React, { useState, useEffect } from "react";
import { Menu, X, Search, ShoppingCart, Palette } from "lucide-react";
import { themeColors } from "@/lib/colorTheme";
import { useBusinessStore } from "@/lib/store";
import Link from "next/link";
import { useParams } from "next/navigation";

export const Nav = () => {
  const params = useParams();
  const businSlug = params.businessSlug;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const theme = useBusinessStore((state) => state.theme);
  const colors = themeColors[theme];
  console.log({ theme: theme, colors: colors, themecolor: themeColors });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "Categories", to: "/categories" },
    // { name: "About", to: "/about" },
    // { name: "Contact", to: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "shadow-lg" : ""
      }`}
      style={{
        backgroundColor: isScrolled
          ? colors.background
          : "rgba(255, 255, 255, 0.95)",
        color: colors.text,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <button
            className="text-2xl md:text-3xl font-bold tracking-tight transition-colors"
            style={{
              fontFamily: "Playfair Display, serif",
              color: colors.text,
            }}
          >
            Royal Nilambur
          </button>

          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, i) => (
              <Link
                key={i}
                href={`${businSlug}/${link.to}`}
                className={`text-sm font-medium transition-colors hover:opacity-70 
                `}
                style={{
                  color: colors.text,
                }}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <button
            className="md:hidden transition-transform hover:scale-110"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X size={24} style={{ color: colors.text }} />
            ) : (
              <Menu size={24} style={{ color: colors.text }} />
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div
          className="md:hidden border-t"
          style={{
            backgroundColor: colors.background,
            borderColor: colors.border,
          }}
        >
          <nav className="px-4 pt-4 pb-6 space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left py-2 text-base font-medium transition-colors"
                style={{}}
              >
                {link.name}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
