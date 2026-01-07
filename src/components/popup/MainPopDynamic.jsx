"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MainPopDynamic() {
  const [popup, setPopup] = useState(null);
  const [open, setOpen] = useState(false);

  const pathname = usePathname();

  /* ===============================
     FETCH POPUP DATA (ONCE)
  =============================== */
  useEffect(() => {
    const getPopup = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5002/api/popup/getByWebsite/dailynews"
        );
        //  const res = await axios.get(
        //   "https://api.shopsmaart.com/api/popup/getByWebsite/dailynews"
        // );

        console.log("Popup API response:", res.data);
        setPopup(res.data);
      } catch (err) {
        console.error("Popup API error:", err);
      }
    };

    getPopup();
  }, []);

  /* ===============================
     OPEN POPUP AFTER 5 SECONDS
  =============================== */
  useEffect(() => {
    if (!popup) return; // wait until popup data is loaded

    const timer = setTimeout(() => {
      if (pathname !== "/") {
        setOpen(true);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [popup, pathname]);

  /* ===============================
     DEBUG LOG (OPTIONAL)
  =============================== */
  useEffect(() => {
    console.log("Popup state updated:", popup);
  }, [popup]);

  /* ===============================
     STOP RENDER
  =============================== */
  if (!popup || !open) return null;

  /* ===============================
     UI
  =============================== */
  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-[9999] p-4 animate-fadeIn">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-xl relative overflow-hidden">

        {/* CLOSE BUTTON */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-3 right-3 bg-black/70 text-white rounded-full px-2 py-1 text-sm hover:bg-black"
        >
          ✕
        </button>

        {/* POPUP IMAGE */}
        <Link
          href={popup?.linkArray?.[0] || "#"}
          target="_blank"
        >
          <Image
            src={`https://api.shopsmaart.com${popup?.images?.[0]}`}
            alt="Popup"
            width={900}
            height={900}
            className="w-full h-auto rounded-xl"
            priority
          />
        </Link>
      </div>

      {/* ANIMATION */}
      <style>
        {`
          .animate-fadeIn {
            animation: fadeIn 0.4s ease-out;
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: scale(0.95);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }
        `}
      </style>
    </div>
  );
}
