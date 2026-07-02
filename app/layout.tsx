import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains-mono" });

export const metadata: Metadata = {
  title: "Nikhil Kumar Tiwari — Portfolio",
  description:
    "Computer Science engineering student building full-stack software with the MERN stack, Java and Spring Boot.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} bg-[#FAFAF7] font-sans text-[#141414] antialiased dark:bg-[#0A0A0B] dark:text-[#EDEDED]`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}