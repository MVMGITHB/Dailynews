"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { base_url } from "../Helper/helper.jsx";

export default function EVPopup({ data }) {
  const [showPopup, setShowPopup] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, [pathname]);

  const handleClose = () => {
    setShowPopup(false);
  };

  return (
    showPopup && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-2 sm:p-4">
        <div className="relative w-full max-w-sm sm:max-w-md md:max-w-xl lg:max-w-2xl rounded-lg overflow-hidden bg-white shadow-lg max-h-[90vh]">
          {/* Close button */}
          <button
            onClick={handleClose}
            aria-label="Close popup"
            className="absolute top-2 right-2 sm:top-3 sm:right-3 
                       text-red-600 text-2xl sm:text-3xl font-bold
                       hover:text-red-700 focus:outline-none"
          >
            &times;
          </button>

          {data?.images?.[0] ? (
            <a
              href={data?.linkArray?.[0]}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Image
                src={`${base_url}${data?.images[0]}`}
                alt="Curvv EV Ad"
                width={872}
                height={389}
                className="w-full h-auto max-h-[80vh] object-contain"
                priority
              />
            </a>
          ) : null}
        </div>
      </div>
    )
  );
}
