"use client";
import axios from "axios";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useEffect, useState } from "react";
import Link from "next/link";
import { base_url } from "../Helper/helper";

import Image from "next/image";

const Authors = () => {
  const [authors, setAuthors] = useState([]);

  const fetchAuthors = async () => {
    try {
      const response = await axios.get(`${base_url}/api/auth/getAllAdmin`);
      console.log("authors", response.data?.users);

      setAuthors(response.data?.users || []);
    } catch (err) {
      console.error("Error fetching authors:", err);
    }
  };

  useEffect(() => {
    fetchAuthors();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
        Meet Our Authors
      </h1>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {authors.map((author) => (
          <div
            key={author._id}
            className="bg-amber-50 rounded-2xl shadow-lg p-6 flex flex-col items-center transition-transform hover:-translate-y-1 hover:shadow-xl"
          >
            <Image
              src={
                author?.image
                  ? `${base_url}${author.image}`
                  : "/images/default-user.png"
              }
              alt={author?.name || "Author"}
              width={112} // 28 * 4 for px equivalent
              height={112}
              className="w-28 h-28 rounded-full object-cover border-4 border-[#211C84] shadow-sm"
            />

            <h2 className="text-xl font-semibold mt-4 text-gray-900 capitalize">
              {author.name}
            </h2>
            <div
              className="text-sm text-gray-600 mt-2 text-center"
              dangerouslySetInnerHTML={{ __html: author.shortBio }}
            />
            <div className="flex gap-4 mt-4 text-[#211C84] text-xl">
              {author.socialMedia?.facebook && (
                <a
                  href={author.socialMedia.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook />
                </a>
              )}
              {author.socialMedia?.linkedin && (
                <a
                  href={author.socialMedia.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                </a>
              )}
              {author.socialMedia?.twitter && (
                <a
                  href={author.socialMedia.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter />
                </a>
              )}
            </div>
            <Link
             href={`/author/${author.slug}`} 
             className=" mt-5"
             rel="noopener noreferrer"
             title="Go to view profile page"
             >
              <button className="w-full px-2 py-2 rounded-xl text-white cursor-pointer bg-[#211C84] hover:bg-[#221C84] transition font-medium">
                View Profile
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Authors;
