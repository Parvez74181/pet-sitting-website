import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/Navbar";
import { Providers } from "./providers";
import Footer from "@/components/Footer";
import Scroll from "@/components/Scroll";

export const metadata: Metadata = {
  title: "Pet Sitting Services",
  description: "Reliable and loving pet sitting services for your furry friends while you're away.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` antialiased font-sofia-regular`}>
        <Scroll />
        <Navbar />
        <main className="light">
          <Providers>{children}</Providers>
        </main>
        <Footer />
      </body>
    </html>
  );
}
