import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Music School",
  description: "Discover the art and science of music at our renowned Music School. From classical to contemporary, beginner to virtuoso, unleash your musical potential with our expert instructors and comprehensive curriculum. Join our vibrant community of passionate musicians and embark on a journey of musical discovery and growth.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <div className="relative w-full flex items-center justify-center">
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  );
}
