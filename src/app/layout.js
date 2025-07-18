import { Geist, Geist_Mono, Prata } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Header/Navbar";
import Footer from "@/components/Header/Footer";
import { AuthProvider } from "@/components/context/auth";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const prata = Prata({
  weight: "400", // ✅ fixed
  subsets: ["latin"],
  variable: "--font-prata",
});
export const metadata = {
  title: "DailyNews",
  description: "Get Latest News and Updates",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${prata.variable} antialiased`}
      >
        <AuthProvider>
        <Navbar />
        {children}
        <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
