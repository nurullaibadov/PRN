import React from "react";
import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { CustomThemeProvider } from "@/context/ThemeContext";
import { I18nProvider } from "@/components/I18nProvider";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nurulla Ibadov | Middle Software Developer",
  description: "Portfolio of Nurulla Ibadov - Middle Software Developer specializing in building high-quality web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body 
        className={`${spaceGrotesk.variable} ${inter.variable} font-sans antialiased overflow-x-hidden`}
        suppressHydrationWarning
      >
        <CustomThemeProvider>
          <I18nProvider>
            {children}
          </I18nProvider>
        </CustomThemeProvider>
      </body>
    </html>
  );
}
