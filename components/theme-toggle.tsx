"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="icon"
        className="rounded-full hover:bg-purple-100 dark:hover:bg-slate-700 transition-colors"
        disabled
      >
        <Sun className="h-5 w-5 text-purple-600" />
      </Button>
    )
  }

  const currentTheme = theme === "system" ? resolvedTheme : theme

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
      className="rounded-full hover:bg-purple-100 dark:hover:bg-slate-700 transition-colors"
    >
      {currentTheme === "dark" ? (
        <Moon className="h-5 w-5 text-purple-400 transition-all" />
      ) : (
        <Sun className="h-5 w-5 text-purple-600 transition-all" />
      )}
      <span className="sr-only">Cambiar tema</span>
    </Button>
  )
}
