
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Model from "@/components/Model";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Biz Soft Solutions",
  description: "Description of the Biz Soft Solutions website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`bg-white antialiased`}
      >
          <Analytics />
          <Navbar />
          {children}
          <Footer />
      </body>
    </html>
  );
}
