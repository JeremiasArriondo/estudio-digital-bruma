export function TopBar() {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-fuchsia-600 dark:from-purple-800 dark:to-fuchsia-800 text-white py-2 px-4 text-center sticky top-0 z-50 transition-colors shadow-md">
      <a
        href="https://wa.me/2475436004?text=Hola,%20quiero%20saber%20qué%20promos%20tienen%20activas"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm hover:underline flex items-center justify-center font-medium"
      >
        📩 Consultanos para saber qué promos tenemos activas
      </a>
    </div>
  )
}
