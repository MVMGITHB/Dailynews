"use client";

import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1F2937] text-gray-300 py-10 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">YourLogo</h2>
          <p className="text-sm">
            Delivering trusted updates, top stories, and expert analysis for a better-informed audience.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">Trending</a></li>
            <li><a href="#" className="hover:underline">Categories</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Terms of Service</a></li>
            <li><a href="#" className="hover:underline">Advertise</a></li>
            <li><a href="#" className="hover:underline">Help</a></li>
          </ul>
        </div>

        {/* Contact & Socials */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Contact</h3>
          <ul className="text-sm space-y-2">
            <li>Email: info@yourdomain.com</li>
            <li>Phone: +91-9876543210</li>
            <li>Address: Noida, India</li>
          </ul>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4 text-white text-lg">
            <a href="#" className="hover:text-blue-500"><FaFacebookF /></a>
            <a href="#" className="hover:text-sky-400"><FaTwitter /></a>
            <a href="#" className="hover:text-pink-500"><FaInstagram /></a>
            <a href="#" className="hover:text-red-600"><FaYoutube /></a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} YourWebsite. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
