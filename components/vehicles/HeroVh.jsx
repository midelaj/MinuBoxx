"use client";
import { useBusinessStore } from "@/lib/store";

export default function HeroVh() {
  const currentTheme = useBusinessStore((state) => state.theme);
  const buttonClass = `px-8 py-3 rounded-md text-lg font-semibold transition-colors duration-300 transform hover:scale-105`;

  return (
    <section
      id="home"
      className="relative h-[60vh] md:h-[80vh] flex items-center justify-center"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://picsum.photos/seed/car-hero/1920/1080')",
        }}
      ></div>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 text-center text-white p-4">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
          Drive Your Dream
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
          Discover a curated selection of premium vehicles, ready for their next
          adventure.
        </p>
        <a
          href="#vehicles"
          className={`mt-8 inline-block ${buttonClass} ${currentTheme.background} `}
        >
          View Vehicles
        </a>
      </div>
    </section>
  );
}
