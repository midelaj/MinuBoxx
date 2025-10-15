import React, { useState } from "react";
import { ShoppingCart, Eye } from "lucide-react";
import { useBusinessStore } from "@/lib/store";
import { themeColors } from "@/lib/colorTheme";
import { useParams, useRouter } from "next/navigation";
import { buildProductUrl } from "@/lib/urlBuilder";

const ProductCard = ({ product }) => {
  const params = useParams();
  const businSlug = params.businessSlug;
  const theme = useBusinessStore((state) => state.theme);
  const colors = themeColors[theme];
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();

  return (
    <div
      className="group rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-2xl"
      style={{ backgroundColor: colors.cardBg }}
      onClick={() => router.push(buildProductUrl(businSlug, product.id))}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3
          className="text-xl font-bold mb-2"
          style={{ fontFamily: "Playfair Display, serif", color: colors.text }}
        >
          {product.name}
        </h3>
        <p
          className="text-sm mb-4"
          style={{ color: colors.text, opacity: 0.7 }}
        >
          {product.tagline}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold" style={{ color: colors.accent }}>
            ₹{product.price.toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
