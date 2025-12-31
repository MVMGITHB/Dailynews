"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MainPopup() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const timer = setTimeout(() => {
      // ❌ Do not show popup on home page
      if (pathname !== "/") {
        setOpen(true);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [pathname]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-[9999] p-4 animate-fadeIn">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-xl relative overflow-hidden">
        
        {/* Close button */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-3 right-3 bg-black/70 text-white rounded-full px-2 py-1 text-sm hover:bg-black"
        >
          ✕
        </button>

        {/* Static popup image */}
        <Link href="https://example.com" target="_blank">
          <Image
            src="/tataneugif.gif"  // public/tataneugif.gif
            alt="Popup Banner"
            width={900}
            height={900}
            className="w-full h-auto rounded-xl"
            priority
          />
        </Link>
      </div>

      {/* Animation */}
      <style>
        {`
          .animate-fadeIn {
            animation: fadeIn 0.4s ease-out;
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: scale(0.95); }
            to { opacity: 1; transform: scale(1); }
          }
        `}
      </style>
    </div>
  );
}
