import { Inter, Caveat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Index";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });
import "react-multi-carousel/lib/styles.css";

const caveat = Caveat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-caveat",
});

export const metadata = {
  title: "Smart Travelling, Smarter Adventures",
  description:
    "Discover a smarter way to travel — explore breathtaking destinations, hidden gems, and unforgettable experiences around the world.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${caveat.variable}`}>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
