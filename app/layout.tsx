import type { Metadata } from "next";
import "./globals.css";
import { Footer, Navbar } from "@/components";

// Importing font configurations

// Metadata for the application
export const metadata: Metadata = {
  title: "Car Hub",
  description: "Discover the best cars in the world",
};

// RootLayout component definition
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" >
      <body className="relative">
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
