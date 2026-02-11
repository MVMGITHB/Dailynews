"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Search, User, Globe } from "lucide-react";

const NavLink = ({ href = "#", children }) => (
  <Link
    href={href}
    className="text-[15px] md:text-[18px] font-medium text-emerald-700 hover:text-emerald-700 transition-colors"
  >
    {children}
  </Link>
);

export default function ArabicNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <header dir="ltr" className=" sticky top-0 z-50 w-full border-b border-gray-200 bg-white">
      {/* Top thin bar */}
      <div className="h-2 bg-amber-500" />

      <div className="max-w-full  px-2">
        <div className="flex items-center justify-between h-18 gap-4">
          {/* Left logos */}
          <div className="flex items-center gap-4 ">
            <Image
              src="/arabic/arabicNavbar.png"
              alt="50 years"
              width={400}
              height={190}
              className="h-14 md:18 w-auto object-contain"
            />
            {/* <div className="hidden sm:flex items-center gap-3">
              <Image src="/hospital-ar.png" alt="arabic logo" width={140} height={40} className="h-10 w-auto" />
              <Image src="/hospital-en.png" alt="english logo" width={140} height={40} className="h-10 w-auto" />
            </div> */}
          </div>

          <div className="flex items-center justify-end gap-6">
            {/* Desktop menu */}
            <nav className="hidden lg:flex items-center gap-6">
              <NavLink>التبرع</NavLink>
              <NavLink>الوظائف</NavLink>
              <NavLink>الخدمات الدولية</NavLink>
              <NavLink>البحث عن طبيب</NavLink>
              <NavLink>الإحالات الطبية</NavLink>
            </nav>

            {/* Right controls */}
            <div className="flex items-center gap-3">
              {/* Language switch */}
              {/* <button className="hidden md:flex items-center gap-2 border rounded-full px-3 py-1 text-sm text-emerald-900 hover:bg-emerald-50">
                <Globe size={16} /> EN
              </button> */}

              {/* User */}
              <button className="hidden md:flex items-center justify-center h-9 w-9 rounded-full text-emerald-700  hover:bg-gray-50">
                <User size={22} />
              </button>

              {/* Search */}
              <div className="hidden md:flex items-center border border-gray-300 rounded-[10px] px-3 py-2 w-56 lg:w-72">
                <Search size={30} className="text-emerald-700 ml-2" />
                <input
                  type="text"
                  placeholder="البحث"
                  className="w-full outline-none text-sm bg-transparent placeholder-gray-500"
                />
              </div>

              <div className="lg:hidden  flex items-center gap-1">
                <div className="flex items-center  ">
                  {/* <button className="flex items-center gap-2 border rounded-full px-3 py-1 text-sm text-emerald-900 hover:bg-emerald-50">
                <Globe size={16} /> EN
              </button> */}
                  <button className="flex items-center justify-center text-emerald-700 h-9 w-9 rounded-full  hover:bg-gray-50">
                    <User size={26} />
                  </button>
                </div>

                <div className="flex items-center   rounded-full px-1 py-2">
                  <Search size={26} className="text-emerald-700 ml-2" />
                  {/* <input
                    type="text"
                    placeholder="البحث"
                    className="w-full outline-none text-sm bg-transparent placeholder-gray-500"
                  /> */}
                </div>

                {/* Mobile menu button */}
                <button
                  className="lg:hidden p-2 text-emerald-700 rounded-md "
                  onClick={() => setOpen(!open)}
                >
                  {open ? <X /> : <Menu />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t bg-white">
          <div className="px-4 py-4 space-y-4">
            <div className="flex flex-col items-start gap-4">
              <NavLink>الإحالات الطبية</NavLink>
              <NavLink>البحث عن طبيب</NavLink>
              <NavLink>الخدمات الدولية</NavLink>
              <NavLink>الوظائف</NavLink>
              <NavLink>التبرع</NavLink>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
