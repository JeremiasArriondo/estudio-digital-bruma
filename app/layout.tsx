import "@/app/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/next";
import { DM_Sans, Inter, Poppins } from "next/font/google";
import type React from "react";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export const metadata = {
  title: "Bruma - Diseño Web Profesional",
  description:
    "Diseñamos webs personalizadas que se adaptan a vos y a lo que ofrecés",
  authors: [
    {
      name: "Jeremias Arriondo",
      url: "https://www.linkedin.com/in/jeremias-arriondo/",
    },
  ],
  creator: "Bruma",
  openGraph: {
    title: "Bruma - Diseño Web Profesional",
    description:
      "Diseñamos webs personalizadas que se adaptan a vos y a lo que ofrecés",
    siteName: "Estudio digital Bruma",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <meta name="apple-mobile-web-app-title" content="Bruma" />
      </head>
      <body
        className={`${poppins.variable} ${inter.variable} ${dmSans.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange={false}
          storageKey="landing-theme"
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
