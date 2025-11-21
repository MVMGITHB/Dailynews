import { Geist, Geist_Mono, Prata } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Header/Navbar";
import Footer from "@/components/Header/Footer";
import { AuthProvider } from "@/components/context/auth";
import BreadcrumbSchema from "@/components/Seo/breadcrumb";
import DailyNewzMailPopup from "@/components/popup/registerpopup";
import Breadcrumb from "@/components/Breadcrumb/BreadCrumbVisible";
import MainPopup from "@/components/popup/MainPopup";

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
  icons: {
    icon: "/images/favicon.png", // path inside /public
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/images/favicon.png"
          type="image/x-icon"
          sizes="16x16"
        />
         <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-PP6SEWNC8L"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PP6SEWNC8L');
          `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${prata.variable} antialiased`}
      >
        <AuthProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar />

            <MainPopup/>
            <BreadcrumbSchema />
            <Breadcrumb />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
