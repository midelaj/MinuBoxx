import React from "react";
import Link from "next/link";

const Button = ({
  children,
  variant = "primary",
  to,
  className = "",
  ...props
}) => {
  const baseClasses =
    "inline-block font-medium text-center px-8 py-3 rounded-xl transition-all duration-300 transform hover:scale-105";

  const variantClasses = {
    primary:
      "bg-primary-btn-bg text-primary-btn-text hover:bg-primary-btn-bg-hover",
    secondary:
      "bg-secondary-btn-bg text-secondary-btn-text border border-secondary-btn-border hover:bg-secondary-btn-bg-hover",
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (to) {
    return (
      <Link href={to} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;
