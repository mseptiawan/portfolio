import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Backend Developer Portfolio",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-white text-foreground dark:bg-background relative`}
      >
        <ThemeProvider>
          {/* BACKGROUND VEKTOR GRID */}
          <div className="absolute inset-0 -z-50 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] dark:bg-[linear-gradient(to_right,#1f2937_0.5px,transparent_0.5px),linear-gradient(to_bottom,#1f2937_0.5px,transparent_0.5px)] pointer-events-none" />

          {/* Efek Masking Gradasi: Membuat grid memudar lembut di bagian bawah */}
          <div className="absolute inset-0 -z-40 bg-gradient-to-b from-transparent via-transparent to-white dark:to-background pointer-events-none" />

          <div className="relative z-10">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
