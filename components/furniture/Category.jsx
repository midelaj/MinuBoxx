"use client";
import { themeColors } from "@/lib/colorTheme";
import { useBusinessStore } from "@/lib/store";
import React from "react";
import Button from "./Button";

const categories = [
  {
    id: "chairs",
    name: "Chairs",
    image:
      "https://images.pexels.com/photos/116910/pexels-photo-116910.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "tables",
    name: "Tables",
    image:
      "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "sofas",
    name: "Sofas",
    image:
      "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "beds",
    name: "Beds",
    image:
      "https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "cabinets",
    name: "Cabinets",
    image:
      "https://images.pexels.com/photos/1743226/pexels-photo-1743226.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "decor",
    name: "Decor",
    image:
      "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

export const Categories = ({ onCategoryClick }) => {
  const theme = useBusinessStore((state) => state.theme);
  const colors = themeColors[theme];

  return (
    <section
      className="py-16 md:py-24"
      style={{ backgroundColor: colors.background }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            style={{
              fontFamily: "Playfair Display, serif",
              color: colors.text,
            }}
          >
            Explore Our Collections
          </h2>
          <p
            className="text-lg md:text-xl"
            style={{ color: colors.text, opacity: 0.7 }}
          >
            Discover handcrafted furniture for every space
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategoryClick && onCategoryClick(category.id)}
              className="group relative overflow-hidden rounded-3xl aspect-[4/5] transition-transform duration-300 hover:scale-105"
              style={{ backgroundColor: colors.cardBg }}
            >
              <img
                src={category.image}
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent group-hover:from-black/80 transition-all duration-300"></div>
              <div className="absolute inset-0 flex items-end p-6">
                <h3
                  className="text-2xl md:text-3xl font-bold text-white"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  {category.name}
                </h3>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
