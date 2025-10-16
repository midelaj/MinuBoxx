"use client";
import React from "react";
import ProductCard from "@/components/furniture/ProductCard";
import { PRODUCTS } from "@/contant";
import { useBusinessStore } from "@/lib/store";
import { themeColors } from "@/lib/colorTheme";
import Link from "next/link";
import Button from "./Button";
import { useParams } from "next/navigation";

export const FeaturedProducts = () => {
  const params = useParams();
  const businSlug = params.businessSlug;
  const theme = useBusinessStore((state) => state.theme);
  const businessType = useBusinessStore((state) => state.businessType);

  const colors = themeColors[theme];
  const featuredProducts = PRODUCTS.filter((p) => p.featured).slice(0.4);

  return (
    <section
      className="py-16 md:py-24"
      style={{ backgroundColor: colors.secondary }}
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
            Featured Collection
          </h2>
          <p
            className="text-lg md:text-xl"
            style={{ color: colors.text, opacity: 0.7 }}
          >
            Handpicked pieces that define luxury and craftsmanship
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      <div className="text-center mt-16">
        <Button to={`${businSlug}/categories`} variant="secondary">
          View All Products
        </Button>
      </div>
    </section>
  );
};
