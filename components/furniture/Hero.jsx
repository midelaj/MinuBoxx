"use client";
import React from "react";
import { ArrowRight } from "lucide-react";
import { useBusinessStore } from "@/lib/store";
import { themeColors } from "@/lib/colorTheme";

export const Hero = () => {
  const theme = useBusinessStore((state) => state.theme);
  const colors = themeColors[theme];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=1920)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left space-y-6 animate-fade-in">
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
              style={{
                fontFamily: "Playfair Display, serif",
                color: "#FFFFFF",
              }}
            >
              Handcrafted Elegance.
              <br />
              Timeless Furniture.
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-xl mx-auto md:mx-0">
              Discover furniture made from authentic Nilambur Teak.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
              <button
                className="px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2"
                style={{
                  backgroundColor: colors.accent,
                  color: "#FFFFFF",
                }}
              >
                Shop Now
                <ArrowRight size={20} />
              </button>
              <button
                className="px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 border-2"
                style={{
                  borderColor: "#FFFFFF",
                  color: "#FFFFFF",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                }}
              >
                Explore Collections
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
};
