"use client";

import React, { useState } from "react";
import DayDate from "./DayDate";
import Categories from "./Categories";
import Link from "next/link";
import { IoIosMenu, IoIosClose } from "react-icons/io";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="w-full bg-[#FFFFF0] shadow-md">
        {/* Top nav bar */}
        <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col sm:flex-row items-center justify-between relative">
          
          {/* Desktop: DayDate */}
          <div className="hidden sm:block">
            <DayDate />
          </div>

          {/* Mobile: Logo + Menu button on same row */}
          <div className="w-full flex justify-between items-center sm:hidden">
            <Link href="/">
              <h1 className="text-xl font-bold">MyLogo</h1>
            </Link>
            <button
              className="text-2xl text-[#B00020]"
              onClick={() => setMenuOpen((prev) => !prev)}      
              aria-label="Toggle Menu"
            >           
              {menuOpen ? <IoIosClose /> : <IoIosMenu />}
            </button>
          </div>

          {/* Desktop: Centered Logo */}
          <div className="hidden sm:block sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2">
            <Link href="/">
              <h1 className="text-xl font-bold">MyLogo</h1>
            </Link>
          </div>

          {/* Desktop: Login & Subscribe */}
          <div className="hidden sm:flex gap-2 ml-auto">
            <button className="px-4 py-2 text-sm font-medium text-[#B00020] hover:underline">
              Login
            </button>
            <button className="px-4 py-2 bg-[#B00020] text-white rounded-md hover:bg-white hover:text-[#B00020] border border-[#B00020] transition">
              Subscribe
            </button>
          </div>
        </div>

        {/* Desktop: Horizontal categories */}
        <div className="hidden sm:block">
          <Categories />
        </div>

        {/* Mobile: Toggleable Menu (Login, Subscribe, Categories) */}
        {menuOpen && (
          <div className="sm:hidden px-4 pb-4 space-y-4 animate-slide-down">
            <div className="flex flex-col gap-2">
              <button className="w-full px-4 py-2 text-[#B00020] rounded-md hover:bg-white hover:text-[#B00020] border border-[#B00020] transition">
                Login
              </button>
              <button className="w-full px-4 py-2 bg-[#B00020] text-white rounded-md hover:bg-white hover:text-[#B00020] border border-[#B00020] transition">
                Subscribe
              </button>
            </div>
            <Categories />
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
