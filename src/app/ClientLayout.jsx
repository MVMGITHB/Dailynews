"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Header/Navbar";
import Footer from "@/components/Header/Footer";
import BreadcrumbSchema from "@/components/Seo/breadcrumb";
import Breadcrumb from "@/components/Breadcrumb/BreadCrumbVisible";
import MainPopDynamic from "@/components/popup/MainPopDynamic";
import GoogleAnalytics from "@/components/GoogleAnalytics";

export default function ClientLayout({ children }) {
  const pathname = usePathname();
//   console.log("Current pathname:", pathname); // Debugging statement

  // hide navbar only on news article page
//   const isNewsArticle = /^\/news\/[^/]+$/.test(pathname);

const news123 = pathname === "new123";

  return (
    <div className="flex flex-col min-h-screen">
      <GoogleAnalytics />

      {/* Navbar hidden on /news/[slug] */}
      {news123 && <Navbar />}

     { news123 && < MainPopDynamic />}
      <BreadcrumbSchema />
     {news123 && <Breadcrumb />}

      <main className="flex-grow">{children}</main>

    { news123 && <Footer />}
    </div>
  );
}