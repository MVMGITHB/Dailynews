"use client";
import Script from "next/script";
import { CheckCircle } from "lucide-react";

const ArabicThankYou = () => {
  return (
    <>
      {/* GTM HEAD SCRIPT */}
      <Script id="gtm-script" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];
          w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
          var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
          j.async=true;
          j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
          f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-PW8LVMD2');
        `}
      </Script>

      {/* GTM NOSCRIPT */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-PW8LVMD2"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>

      {/* PAGE UI */}
      <div
        dir="rtl"
        className="min-h-[600px] flex items-center justify-center bg-gray-100 px-4"
        id="thankyou"
      >
        <div className="relative w-full max-w-xl bg-green-50 border border-green-300 rounded-2xl p-10 text-center shadow-sm">
          <div className="absolute top-4 right-4 text-green-600">
            <CheckCircle size={34} strokeWidth={2.5} />
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-green-700 mb-4">
            تم استلام تقديمك
          </h1>

          <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
            سوف نتصل بك قريبًا
          </p>
        </div>
      </div>
    </>
  );
};

export default ArabicThankYou;