"use client";

import { ReactNode } from "react";

interface WhatsAppButtonProps {
  phone?: string;
  message?: string;
  className?: string;
  icon?: ReactNode;
  label?: string;
}

export function WhatsAppButton({
  phone = "2475436004",
  message = "Hola, necesito información sobre…",
  className = "",
  icon,
  label,
}: WhatsAppButtonProps) {
  const handleWhatsAppClick = () => {
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${phone}?text=${encoded}`, "_blank");
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className={`flex items-center justify-center gap-2 transition-all ${className}`}
    >
      {icon}
      {label && <span>{label}</span>}
    </button>
  );
}
