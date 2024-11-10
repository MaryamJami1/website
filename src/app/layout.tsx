import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Price from "./Components/Price/Price";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "  Website",
  description: "Website with css",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     
      <body className={inter.className}>
      <Navbar />
      {children}
      <Price/>
      <Footer/>
      </body>
      
    </html>
  );
}
