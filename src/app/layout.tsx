import type { Metadata } from "next";
import { Outfit } from "next/font/google"; // Premium modern font
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { RecipeProvider } from "@/context/RecipeContext";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Recipe App - Premium Selection",
  description: "A spectacularly designed recipe application.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} antialiased`}>
        <LanguageProvider>
          <RecipeProvider>
            {children}
          </RecipeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
