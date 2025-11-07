"use client";

import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[hsl(60,100%,99%)] text-black py-10 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        {/* Logo & Description */}
        <div className="md:w-1/4">
          <Link href="/">
            <img
              src="/logo.png"
              alt="Logo"
              className="w-28 h-28 object-cover"
            />
          </Link>
          <p className="text-sm mt-2">
            Delivering trusted updates, top stories, and expert analysis for a
            better-informed audience.
          </p>
        </div>

        {/* Resources */}
        <div className="md:w-1/4">
          <p className="text-xl font-semibold text-black mb-3">Resources</p>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/privacy-policy" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/terms-of-service" className="hover:underline">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="/advertise" className="hover:underline">
                Advertise
              </a>
            </li>
            <li>
              <a href="/help" className="hover:underline">
                Help
              </a>
            </li>
          </ul>
        </div>

        {/* Contact & Socials */}
        <div className="md:w-1/4">
          <p className="text-xl font-semibold text-black mb-3">Contact</p>
          <ul className="text-sm space-y-2">
            <li>Address: Noida, India</li>
          </ul>

          <div className="flex gap-4 mt-4 text-black text-lg">
            <a href="https://www.facebook.com/Daillynewzmail" className="hover:text-blue-500">
              <FaFacebookF />
            </a>
            <a href="https://x.com/DailynewzM91211" className="hover:text-sky-400">
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com/dailynewzmail.official/" target="_blank"
              className="hover:text-pink-500"
            >
              <FaInstagram />
            </a>


            {/* <a href="#" className="hover:text-red-600">
              <FaYoutube />
            </a> */}
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-black mt-10 pt-4 text-center text-sm text-black">
        © {new Date().getFullYear()} Dailynews. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
