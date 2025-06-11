
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
  description: "Best ERP Software  Best ERP software for Enterprises & SMBs Discover the most affordable and the best ERP software made to improve your daily work, increase efficiency, and take your business to the next level.",
  openGraph: {
    title: "Biz Soft Solutions",
    description: "Best ERP Software  Best ERP software for Enterprises & SMBs Discover the most affordable and the best ERP software made to improve your daily work, increase efficiency, and take your business to the next level.",
    url: "https://bizsoftsolutions.net",
    siteName: "Biz Soft Solutions",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "Biz Soft Solutions Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
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
