import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeModeScript, DarkThemeToggle } from "flowbite-react";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: "Create Flowbite React",
  description: "Generated by create flowbite react",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ThemeModeScript />
      </head>
      <body className={inter.className + " h-screen flex flex-col justify-between dark:bg-gray-700 dark:text-white"}>
        <header>
          <Nav />
        </header>
        <main>
          {children}
        </main>
        <footer>
          Footer
        </footer>
      </body>
    </html>
  );
}
