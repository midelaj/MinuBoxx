"use client";
import { useBusinessStore } from "@/lib/store";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { themeColors } from "@/lib/colorTheme";

function NavVh({ currentTheme }) {
  const dropdownRef = useRef(null);
  console.log("currentTheme");
  

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsThemeDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownRef]);

  return (
    <header
      className={`sticky top-0 z-50 shadow-md ${currentTheme.header.background} ${currentTheme.header.text} ${currentTheme.header.border}  `}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold">
              Auto
              <span className={currentTheme.textAccent}>Portfolio</span>
            </span>
          </Link>

          {/* <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsThemeDropdownOpen(!isThemeDropdownOpen)}
              className={`p-2 rounded-full hover:${currentTheme.textAccent} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:${currentTheme.textAccent}`}
            >
              <ThemeIcon />
            </button>
            {isThemeDropdownOpen && (
              <div
                className={`absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 ${currentTheme.card.background} ring-1 ring-black ring-opacity-5`}
              >
                {themeOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => {
                      setTheme(option.value);
                      setIsThemeDropdownOpen(false);
                    }}
                    className={`block w-full text-left px-4 py-2 text-sm ${currentTheme.card.text} hover:${currentTheme.textAccent} hover:bg-gray-100 dark:hover:bg-gray-800`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            )}
          </div> */}
        </div>
      </div>
    </header>
  );
}

export default NavVh;
