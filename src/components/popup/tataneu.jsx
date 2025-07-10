"use client";
import { useEffect, useState } from "react";
import { X } from "lucide-react";
import Link from "next/link";


 
export default function TataPopup({link,desImg,mobIg}) {
  const [visible, setVisible] = useState(false);
  const [showClose, setShowClose] = useState(false);
 
  useEffect(() => {
    const showTimer = setTimeout(() => setVisible(true), 10000);
    const closeTimer = setTimeout(() => setShowClose(true), 11000);
    return () => {
      clearTimeout(showTimer);
      clearTimeout(closeTimer);
    };
  }, []);
 
  if (!visible) return null;
 
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-2">
      <div className="relative min-w-[65%] flex justify-center  rounded-2xl overflow-hidden">
 
         {showClose && (
          <button
            onClick={() => setVisible(false)}
            className="absolute cursor-pointer top-3 right-10 z-20 bg-white/80 hover:bg-white rounded-full p-1 transition"
          >
            <X size={20} className="text-black" />
          </button>
        )}
       
        <Link
          href={link}
          target="_blank"
          className="relative"
        >
          <img
            src={desImg}
            alt="Popup"
            className="hidden md:block h-auto max-h-[60vh] object-contain rounded-2xl "
          />

           <img
            src={mobIg}
            alt="Popup"
            className="md:hidden  h-auto max-h-[60vh] object-contain rounded-2xl "
          />
 
         
        </Link>
      </div>
    </div>
  );
}