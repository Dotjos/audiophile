import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { ConvexClientProvider } from "./ConvexClientProvider";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import LayoutClient from "./LayoutClient";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const metadata: Metadata = {
  title: "Audiophile e-commerce app",
  description:
    "An immersive e-commerce experience built with Next.js and Convex for backend functionality.",
};

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={manrope.className}>
      <body className="relative bg-grayLighter max-w-[1440px] mx-auto w-full">
        <ConvexClientProvider>
          <LayoutClient>
            <Navbar />
            <main>{children}</main>
            <Footer />
            <ToastContainer />
          </LayoutClient>
        </ConvexClientProvider>
      </body>
    </html>
  );
}
