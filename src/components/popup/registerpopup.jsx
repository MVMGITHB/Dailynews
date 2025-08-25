"use client";

import { useState, useEffect } from "react";

export default function DailyNewzMailPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const popupShown = localStorage.getItem("dailynewzmail_popup_shown");

    if (!popupShown) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        localStorage.setItem("dailynewzmail_popup_shown", "true");
      }, 7000); // Auto open after 3 seconds

      return () => clearTimeout(timer);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks for subscribing to DailyNewzMail.com: ${email}`);
    setEmail("");
    setIsOpen(false);
  };

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded-lg shadow-md"
      >
        Subscribe Now
      </button>

      {/* <button
  onClick={() => setIsOpen(true)}
  className="bg-gradient-to-b from-orange-500 via-white to-green-500 hover:brightness-110 text-black font-semibold px-4 py-2 rounded-lg shadow-md border border-gray-300"
>
  Subscribe Now
</button> */}


      {/* Popup Overlay */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
          <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6 relative animate-fadeIn">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
            >
              ✕
            </button>

            {/* Content */}
            <h2 className="text-2xl font-bold text-gray-800 text-center">
              Stay Updated with DailyNewzMail.com
            </h2>
            <p className="text-gray-600 text-center mt-2">
              Get the latest news and updates delivered straight to your inbox.
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="mt-4 space-y-4">
              <input
                type="email"
                required
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
              />
              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded-lg shadow-md"
              >
                Subscribe
              </button>
            </form>

            <p className="text-xs text-gray-400 text-center mt-3">
              By subscribing, you agree to our{" "}
              <a href="/privacy-policy" className="underline text-red-500">
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>
      )}
    </>
  );
}
