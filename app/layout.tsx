import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kamal Hosny | Frontend Engineer",
  description:
    "Kamal Hosny is a Frontend Engineer building modern, scalable, and high-performance web experiences with React.js and Next.js.",
  openGraph: {
    title: "Kamal Hosny | Frontend Engineer",
    description:
      "Modern, scalable, and high-performance web experiences with React.js and Next.js.",
    url: "https://kamal-hosny.vercel.app/",
    siteName: "Kamal Hosny",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kamal Hosny | Frontend Engineer",
    description:
      "Modern, scalable, and high-performance web experiences with React.js and Next.js.",
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
    shortcut: "/logo.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth scroll-pt-[92px] bg-[#090b0e] max-[700px]:scroll-pt-[72px]">
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${jetBrainsMono.variable} min-h-screen min-w-[320px] overflow-x-hidden bg-[#090b0e] bg-none font-[family-name:var(--font-inter)] text-[#f3f4f6] antialiased selection:bg-[#c7f36b] selection:text-[#090b0e]`}>
        {children}
      </body>
    </html>
  );
}