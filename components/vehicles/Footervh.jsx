import React from "react";
// import { useAppContext } from "../contexts/AppContext";
import { useBusinessStore } from "@/lib/store";

function FooterVh() {
  const currentTheme = useBusinessStore((state) => state.theme);

  return (
    <footer
      className={`${currentTheme.background} ${currentTheme.border} border-t`}
    >
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0">
          <p className={`${currentTheme.textMuted} text-sm`}>
            &copy; {new Date().getFullYear()} AutoPortfolio. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default FooterVh;
