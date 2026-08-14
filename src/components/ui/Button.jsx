import React from "react";

export default function Button({
  children,
  onClick,
  type = "button",
  variant = "primary", // primary | secondary | outline | danger | success
  size = "md", // sm | md | lg
  fullWidth = false,
  className = "",
  disabled = false,
  ...props
}) {
  // Base style yang dipakai oleh semua varian tombol
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-2xl focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed active:scale-95";

  // Varian warna & gaya
  const variants = {
    primary: "bg-rose-900 text-white hover:bg-rose-700 hover:shadow-lg",
    secondary: "bg-rose-100 text-rose-900 hover:bg-rose-200",
    outline:
      "border border-rose-900 text-rose-900 hover:bg-rose-900 hover:text-white",
    danger: "bg-red-600 text-white hover:bg-red-700",
    success: "bg-emerald-600 text-white hover:bg-emerald-700",
  };

  // Ukuran tombol
  const sizes = {
    sm: "px-4 py-1.5 text-xs",
    md: "px-6 py-2 text-sm",
    lg: "px-8 py-3 text-base",
  };

  // Lebar penuh
  const widthStyle = fullWidth ? "w-full" : "";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthStyle} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
