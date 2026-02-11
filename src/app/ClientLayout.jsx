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

  // hide layout ONLY on /new123 page
  const news123 = pathname !== "/new123";

  return (
    <div className="flex flex-col min-h-screen">
      <GoogleAnalytics />

      {news123 && <Navbar />}
      {news123 && <MainPopDynamic />}
      <BreadcrumbSchema />
      {news123 && <Breadcrumb />}

      <main className="flex-grow">{children}</main>

      {news123 && <Footer />}
    </div>
  );
}