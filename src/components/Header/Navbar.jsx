"use client";

import React, { useState } from "react";
import DayDate from "./DayDate";
import Categories from "./Categories";
import Link from "next/link";
import { IoIosMenu, IoIosClose } from "react-icons/io";
import { useAuth } from "../context/auth";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [auth, setAuth] = useAuth();
  const handleLogout = () => {
    setAuth({ ...auth, user: null, token: "" });
    localStorage.removeItem("auth");
  };

  return (
    <>
      <nav className="w-full bg-[#FFFFFF] shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col sm:flex-row items-center justify-between relative">
          <div className="hidden sm:block">
            <DayDate />
          </div>

          <div className="w-full flex justify-between items-center sm:hidden">
            <Link href="/">
            <img src="/logo.png" alt="" className="w-14 h-14 object-cover" />
            </Link>
            <button
              className="text-2xl text-[#B00020]"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Toggle Menu"
            >
              {menuOpen ? <IoIosClose /> : <IoIosMenu />}
            </button>
          </div>

          <div className="hidden sm:block sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2">
            <Link href="/">
            <img src="/logo.png" alt="" className="w-28 h-28 object-cover" />
            </Link>
          </div>

          <div className="hidden sm:flex gap-2 ml-auto">
            {auth?.user ? (
              <>
                <button className="px-4 py-2 text-sm font-medium text-[#B00020] hover:underline cursor-pointer uppercase">
                  {auth?.user?.name}
                </button>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 bg-[#B00020] text-white cursor-pointer rounded-md hover:bg-white hover:text-[#B00020] border border-[#B00020] transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link href="/login">
                  <button className="px-4 py-2 text-sm font-medium text-[#B00020] hover:underline cursor-pointer">
                    Login
                  </button>
                </Link>
                <Link href="/register">
                  <button className="px-4 py-2 bg-[#B00020] text-white cursor-pointer rounded-md hover:bg-white hover:text-[#B00020] border border-[#B00020] transition">
                    Subscribe
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>

        <div className="hidden sm:block">
          <Categories />
        </div>

        {menuOpen && (
          <div className="sm:hidden px-4 pb-4 space-y-4 animate-slide-down">
            <div className="flex flex-col gap-2">
              {/* <button className="w-full px-4 py-2 text-[#B00020] rounded-md hover:bg-white hover:text-[#B00020] border border-[#B00020] transition">
                Login
              </button>
              <button className="w-full px-4 py-2 bg-[#B00020] text-white rounded-md hover:bg-white hover:text-[#B00020] border border-[#B00020] transition">
                Subscribe
              </button> */}

              {auth?.user ? (
                <>
                  <button className="px-4 py-2 text-sm font-medium text-[#B00020] hover:underline cursor-pointer uppercase">
                    {auth?.user?.name}
                  </button>
                  <button
                    onClick={handleLogout}
                    className="px-4 py-2 bg-[#B00020] text-white cursor-pointer rounded-md hover:bg-white hover:text-[#B00020] border border-[#B00020] transition"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link href="/login">
                    <button className="px-4 py-2 text-sm font-medium text-[#B00020] hover:underline cursor-pointer">
                      Login
                    </button>
                  </Link>
                  <Link href="/register">
                    <button className="px-4 py-2 bg-[#B00020] text-white cursor-pointer rounded-md hover:bg-white hover:text-[#B00020] border border-[#B00020] transition">
                      Subscribe
                    </button>
                  </Link>
                </>
              )}
            </div>
            <Categories />
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
