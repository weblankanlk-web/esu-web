import type { Metadata } from "next";
import {
  Space_Grotesk,
  Nunito,
  Merriweather,
  Lobster,
  Orbitron,
  Felipa,
  Poppins,
  Manrope,
} from "next/font/google";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/global.scss";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { ThemeProvider } from "@/lib/ThemeContext";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-nunito",
});

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-merriweather",
});

const lobster = Lobster({
  subsets: ["latin"],
  weight: ["400"], // only 400 available
  variable: "--font-lobster",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-orbitron",
});

const felipa = Felipa({
  subsets: ["latin"],
  weight: ["400"], // only 400 available
  variable: "--font-felipa",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"], // or customize as needed
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title:
    "Education Institute in Sri Lanka | Sri Lanka Private University | ESOFT Uni",
  description:
    "At ESOFT Uni, we&#039;re committed to providing a transformative learning experience. With programs in ICT and other degree courses, our education institutes in Sri Lanka are widespread.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${spaceGrotesk.variable}
          ${nunito.variable}
          ${merriweather.variable}
          ${lobster.variable}
          ${orbitron.variable}
          ${felipa.variable}
          ${poppins.variable}
          ${manrope.variable}
        `}
      >
        <ThemeProvider>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
