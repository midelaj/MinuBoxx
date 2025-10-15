"use client";
import { useParams } from "next/navigation";
import React from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { useBusinessStore } from "@/lib/store";
import { themeColors } from "@/lib/colorTheme";
import Link from "next/link";

export const Footer = () => {
  const params = useParams();
  const businSlug = params.businessSlug;
  const theme = useBusinessStore((state) => state.theme);
  const colors = themeColors[theme];

  const quickLinks = [
    { name: "Home", to: "/" },
    { name: "Categories", to: "/categories" },
    // { name: "About", id: "about" },
    // { name: "Contact", id: "contact" },
  ];

  return (
    <footer
      className="pt-16 pb-8"
      style={{
        backgroundColor: colors.cardBg,
        borderTop: `1px solid ${colors.border}`,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h3
              className="text-2xl font-bold mb-4"
              style={{
                fontFamily: "Playfair Display, serif",
                color: colors.text,
              }}
            >
              Royal Nilambur
            </h3>
            <p
              className="mb-6 leading-relaxed"
              style={{ color: colors.text, opacity: 0.7 }}
            >
              Crafting timeless furniture from authentic Nilambur Teak since
              1975. Excellence in every grain.
            </p>
            <div className="flex gap-4">
              <button
                className="p-2 rounded-full transition-all duration-300 hover:scale-110"
                style={{ backgroundColor: colors.secondary }}
              >
                <Facebook size={20} style={{ color: colors.accent }} />
              </button>
              <button
                className="p-2 rounded-full transition-all duration-300 hover:scale-110"
                style={{ backgroundColor: colors.secondary }}
              >
                <Instagram size={20} style={{ color: colors.accent }} />
              </button>
              <button
                className="p-2 rounded-full transition-all duration-300 hover:scale-110"
                style={{ backgroundColor: colors.secondary }}
              >
                <Twitter size={20} style={{ color: colors.accent }} />
              </button>
            </div>
          </div>

          <div>
            <h4
              className="text-lg font-bold mb-4"
              style={{ color: colors.text }}
            >
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    href={`${businSlug}/${link.to}`}
                    className="transition-colors hover:opacity-70"
                    style={{ color: colors.text, opacity: 0.7 }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4
              className="text-lg font-bold mb-4"
              style={{ color: colors.text }}
            >
              Categories
            </h4>
            <ul className="space-y-3">
              {["Chairs", "Tables", "Sofas", "Beds"].map((category) => (
                <li key={category}>
                  <button
                    className="transition-colors hover:opacity-70"
                    style={{ color: colors.text, opacity: 0.7 }}
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4
              className="text-lg font-bold mb-4"
              style={{ color: colors.text }}
            >
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin
                  size={20}
                  style={{ color: colors.accent, flexShrink: 0, marginTop: 2 }}
                />
                <span style={{ color: colors.text, opacity: 0.7 }}>
                  Nilambur, Kerala, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone
                  size={20}
                  style={{ color: colors.accent, flexShrink: 0 }}
                />
                <span style={{ color: colors.text, opacity: 0.7 }}>
                  +91 98765 43210
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail
                  size={20}
                  style={{ color: colors.accent, flexShrink: 0 }}
                />
                <span style={{ color: colors.text, opacity: 0.7 }}>
                  info@royalnilambur.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="pt-8 border-t text-center"
          style={{ borderColor: colors.border }}
        >
          <p style={{ color: colors.text, opacity: 0.6 }}>
            © 2025 Royal Nilambur. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
