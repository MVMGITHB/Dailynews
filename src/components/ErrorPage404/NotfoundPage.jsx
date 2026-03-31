import React from "react";
import Link from "next/link";

const NotfoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="text-center">
        
        {/* 404 Text */}
        <h1 className="text-9xl font-extrabold text-gray-800 tracking-widest">
          404
        </h1>

        {/* Divider Badge */}
        <div className="bg-black text-white px-4 py-1 text-sm rounded inline-block mt-4">
          Page Not Found
        </div>

        {/* Description */}
        <p className="mt-6 text-gray-600 text-lg">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex justify-center gap-4">
          <Link
            href={`/`}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
          >
            Go Home
          </Link>
        
        </div>

      </div>
    </div>
  );
};

export default NotfoundPage;