import type { Metadata } from "next";
import { DM_Serif_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-serif",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Richway Lofts & Extensions | London & Essex",
    template: "%s | Richway Lofts & Extensions",
  },
  description:
    "Expert house extensions, loft conversions, and complete renovations across London and Essex. 30+ years experience, 10-year guarantee, free consultation.",
  keywords: [
    "house extensions London",
    "loft conversions Essex",
    "home renovations",
    "rear extensions",
    "dormer loft conversion",
  ],
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Richway Lofts & Extensions",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${dmSerifDisplay.variable} ${dmSans.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
