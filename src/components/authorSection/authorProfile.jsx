"use client";

import { useEffect, useState } from "react";
import { base_url } from "../Helper/helper";

import Image from "next/image";

export default function AuthorPage({ slug }) {
  const [author, setAuthor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchAuthor() {
      try {
        const res = await fetch(
          `${base_url}/api/auth/singleUserbyslug/${slug}`
        );


       
        if (!res.ok) throw new Error("Failed to fetch data");
        const data = await res.json();


        //  console.log("respons is devansh " , data);

        setAuthor(data[0]);
      } catch (err) {
        setError("Failed to load author data.");
      } finally {
        setLoading(false);
      }
    }
    fetchAuthor();
  }, [slug]);

  if (loading)
    return (
      <p className="p-8 text-center text-gray-600">Loading author details...</p>
    );
  if (error) return <p className="p-8 text-center text-red-500">{error}</p>;
  if (!author)
    return <p className="p-8 text-center text-gray-500">No author found.</p>;

  const fullName = `${author.firstName} ${author.lastName}`;
  const joinDate = new Date(author.createdAt).toLocaleDateString();

  return (
    <>
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-white shadow-xl rounded-3xl p-6 border border-gray-200">
          <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
            <Image
              src={
                author?.image
                  ? `${base_url}${author.image}`
                  : "/images/default-user.png"
              }
              alt={author?.image || "Author"}
              width={128} // size for desktop
              height={128} // size for desktop
              className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full border-4 border-blue-500 shadow-md object-cover"
            />

            <div className="flex-1 text-center md:text-left space-y-2">
              <h1 className="text-4xl font-bold text-gray-900">
                {author?.name}
              </h1>

              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {author.tag && (
                  <span className="bg-green-100 text-green-800 text-sm px-4 py-1 rounded-full">
                    🏷️ {author.tag}
                  </span>
                )}
                <span className="text-gray-600 text-sm">
                  📅 Joined: {joinDate}
                </span>
              </div>

              {author.shortBio && (
                <div
                  className="text-gray-700 mt-4 leading-relaxed prose max-w-none"
                  dangerouslySetInnerHTML={{ __html: author.shortBio }}
                />
              )}
            </div>
          </div>
        </div>

        {author.blog?.length > 0 && (
          <div className="mt-12 space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              📝 Blog Posts by {author.name}
            </h2>

            {[...author.blog]
              .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
              .map((post) => (
                <div
                  key={post._id}
                  className="bg-white rounded-2xl p-6 shadow-md border"
                >
                  <div className="flex flex-col lg:flex-row gap-4">
                    <Image
                      src={
                        typeof post.image === "string"
                          ? post.image.includes("res")
                            ? post.image
                            : `${base_url}${post.image}`
                          : post.image?.url
                      }
                      alt={post.title}
                      width={193} // replace with actual image width
                      height={128} // replace with actual image height
                      className="w-full lg:w-48 h-32 object-cover rounded-xl"
                      priority
                    />

                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900">
                        {post.title}
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">{post.mdesc}</p>

                      <div className="flex flex-wrap mt-2 gap-2 text-sm">
                        <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full">
                          📂 {post.categories?.name}
                        </span>
                        <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full">
                          🔖 {post.subcategories?.name}
                        </span>
                      </div>

                      <a
                        href={`/${post?.category?.slug}/${post.slug}`}
                        className="inline-block mt-4 text-blue-600 hover:underline text-sm font-medium"
                      >
                        Read More →
                      </a>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        )}
      </section>
    </>
  );
}
