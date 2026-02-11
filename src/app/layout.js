import { Geist, Geist_Mono, Prata } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/components/context/auth";
import ClientLayout from "./ClientLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const prata = Prata({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-prata",
});

export const metadata = {
  title: "DailyNews",
  description: "Get Latest News and Updates",
  icons: {
    icon: "/images/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${prata.variable} antialiased`}
      >
        <AuthProvider>
          <ClientLayout>{children}</ClientLayout>
        </AuthProvider>
      </body>
    </html>
  );
}