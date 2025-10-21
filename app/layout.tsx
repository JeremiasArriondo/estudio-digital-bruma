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
    "Diseñamos webs personalizadas que se adaptan a vos y a lo que ofrecés. Sitios web profesionales, tiendas online, portfolios y más.",
  keywords: [
    "diseño web",
    "desarrollo web",
    "sitio web profesional",
    "tienda online",
    "portfolio",
    "diseño web Argentina",
    "desarrollo web Argentina",
    "sitio web responsive",
    "diseño de marca",
    "identidad visual",
  ],
  authors: [
    {
      name: "Jeremias Arriondo",
      url: "https://www.linkedin.com/in/jeremias-arriondo/",
    },
  ],
  creator: "Bruma",
  publisher: "Estudio Digital Bruma",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.estudiodigitalbruma.com.ar"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Bruma - Diseño Web Profesional",
    description:
      "Diseñamos webs personalizadas que se adaptan a vos y a lo que ofrecés. Sitios web profesionales, tiendas online, portfolios y más.",
    siteName: "Estudio digital Bruma",
    type: "website",
    locale: "es_AR",
    url: "https://www.estudiodigitalbruma.com.ar",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bruma - Diseño Web Profesional",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bruma - Diseño Web Profesional",
    description:
      "Diseñamos webs personalizadas que se adaptan a vos y a lo que ofrecés.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Bruma",
              description:
                "Diseñamos webs personalizadas que se adaptan a vos y a lo que ofrecés. Sitios web profesionales, tiendas online, portfolios y más.",
              url: "https://www.estudiodigitalbruma.com.ar",
              logo: "https://www.estudiodigitalbruma.com.ar/icon0.svg",
              image: "https://www.estudiodigitalbruma.com.ar/og-image.jpg",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+5492475471782",
                contactType: "customer service",
                areaServed: "AR",
                availableLanguage: "Spanish",
              },
              founder: {
                "@type": "Person",
                name: "Jeremias Arriondo",
                url: "https://www.linkedin.com/in/jeremias-arriondo/",
              },
              address: {
                "@type": "PostalAddress",
                addressCountry: "AR",
              },
              sameAs: ["https://www.linkedin.com/in/jeremias-arriondo/"],
              service: [
                {
                  "@type": "Service",
                  name: "Diseño Web",
                  description:
                    "Diseño de sitios web profesionales y responsivos",
                },
                {
                  "@type": "Service",
                  name: "Desarrollo Web",
                  description: "Desarrollo de sitios web personalizados",
                },
                {
                  "@type": "Service",
                  name: "Tiendas Online",
                  description: "Desarrollo de e-commerce y tiendas virtuales",
                },
                {
                  "@type": "Service",
                  name: "Diseño de Marca",
                  description: "Creación de identidad visual y branding",
                },
              ],
            }),
          }}
        />
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
