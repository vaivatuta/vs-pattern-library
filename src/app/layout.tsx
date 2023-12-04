import "./global.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "../components/global/NavBar";
import Footer from "../components/global/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VS Pattern Library",
  description: "A personal pattern library site built with Sanity and Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-zinc-900 text-white`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
