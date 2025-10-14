"use client"

import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hola, necesito información sobre…")
    window.open(`https://wa.me/2475436004?text=${message}`, "_blank")
  }

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700 text-white p-4 rounded-full shadow-lg transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-green-400 dark:focus:ring-green-500 focus:ring-offset-2"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle size={24} />
    </button>
  )
}
