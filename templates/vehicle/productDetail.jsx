"use client";

import React, { useEffect } from "react";
import { useParams } from "next/navigation";
import { useBusinessStore } from "@/lib/store";
import { themeColors } from "@/lib/colorTheme";

// --- MAIN PAGE ---
export default function ProductDetail({ product }) {
  const params = useParams();
  const theme = useBusinessStore((state) => state.theme);
  const currentTheme = themeColors[theme];

  const vehicle = product;
  const id = product?.id;

  // Params come as { id: "slug" }
  //   const id = params?.id;
  //   const vehicle = vehicles?.find((v) => v.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!vehicle) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h1 className={`text-2xl ${currentTheme.text}`}>Vehicle not found</h1>
      </div>
    );
  }

  const specs = [
    { label: "Year", value: vehicle.year, Icon: YearIcon },
    { label: "Engine", value: vehicle.engine, Icon: EngineIcon },
    {
      label: "Mileage",
      value: `${vehicle.mileage.toLocaleString()} mi`,
      Icon: MileageIcon,
    },
    {
      label: "Transmission",
      value: vehicle.transmission,
      Icon: TransmissionIcon,
    },
    { label: "Fuel Type", value: vehicle.fuel, Icon: FuelIcon },
    { label: "Category", value: vehicle.category, Icon: CategoryIcon },
  ];

  const buttonClass =
    "w-full md:w-auto flex-1 md:flex-initial text-center px-8 py-3 rounded-md text-lg font-semibold transition-colors duration-300";

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Left column for Image */}
        <div className="lg:col-span-3">
          <img
            src={vehicle.image}
            alt={vehicle.name}
            className="w-full h-auto object-cover rounded-lg shadow-2xl"
          />
        </div>

        {/* Right column for Details */}
        <div className="lg:col-span-2">
          <span className={`font-semibold ${currentTheme.textAccent}`}>
            {vehicle.category}
          </span>
          <h1 className={`text-4xl font-bold mt-2 ${currentTheme.text}`}>
            {vehicle.name}
          </h1>
          <p
            className={`text-3xl font-light mt-4 ${currentTheme.textMuted}`}
          >{`$${vehicle.price.toLocaleString()}`}</p>
          <p className={`mt-6 text-base leading-relaxed ${currentTheme.text}`}>
            {vehicle.description}
          </p>

          <div className="mt-8">
            <h3 className={`text-xl font-semibold mb-4 ${currentTheme.text}`}>
              Key Specifications
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {specs.map((spec) => (
                <SpecCard key={spec.label} {...spec} />
              ))}
            </div>
          </div>

          <div className="mt-10 border-t pt-8">
            <h3 className={`text-xl font-semibold mb-4 ${currentTheme.text}`}>
              Contact Dealer
            </h3>
            <div className="flex flex-col md:flex-row gap-4">
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className={`${buttonClass} bg-green-500 text-white hover:bg-green-600`}
              >
                WhatsApp
              </a>
              <a
                href="tel:1234567890"
                className={`${buttonClass} ${currentTheme.button.primary} ${currentTheme.button.primaryText} ${currentTheme.button.primaryHover}`}
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const SpecCard = ({ label, value, Icon }) => {
  const theme = useBusinessStore((state) => state.theme);
  const currentTheme = themeColors[theme];

  return (
    <div
      className={`p-4 rounded-lg flex items-center space-x-4 ${currentTheme.card.background} ${currentTheme.border} border`}
    >
      <Icon className={`w-8 h-8 ${currentTheme.textAccent}`} />
      <div>
        <p className={`text-sm ${currentTheme.textMuted}`}>{label}</p>
        <p className={`font-semibold ${currentTheme.text}`}>{value}</p>
      </div>
    </div>
  );
};

// --- SVG ICONS ---
const YearIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const EngineIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 20V10" />
    <path d="M12 10V4" />
    <path d="M12 10h7.5" />
    <path d="M12 10H4.5" />
    <path d="M19.5 20H4.5" />
    <path d="M17 10a5 5 0 1 1-10 0" />
  </svg>
);

const MileageIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 12c-2 0-4.5 1-4.5 3.5V20h9v-4.5c0-2.5-2.5-3.5-4.5-3.5z" />
    <path d="M12 12c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" />
  </svg>
);

const TransmissionIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 20v-8" />
    <path d="M12 20h2a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2z" />
    <path d="M12 4V2" />
    <path d="M12 4h2a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v0a2 2 0 0 1 2-2h2z" />
  </svg>
);

const FuelIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M14 8V5a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" />
    <path d="M14 8h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1" />
    <path d="M4 11h16" />
    <path d="M4 11v9a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-9" />
    <path d="M10 16h4" />
  </svg>
);

const CategoryIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m18 19-6-7-6 7" />
    <path d="m18 12-6-7-6 7" />
  </svg>
);
