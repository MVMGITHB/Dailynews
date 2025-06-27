import Link from "next/link";
import { base_url } from "../Helper/helper";

function Trending({news}) {
  return (
    <div className="relative w-full px-4 md:px-8 py-8 mb-6">
      {/* Top Heading with Horizontal Lines and Vertical Edges */}
      <div className="relative flex items-center justify-center gap-4">
        {/* Left Horizontal Line */}
        <div className="flex items-center gap-1">
          {/* Left vertical cap */}
          <div className="w-px h-6 bg-gray-400" />
          <hr className="w-20 sm:w-32 h-px bg-gray-400 border-0" />
        </div>

        {/* Trending Text */}
        <h5 className="text-2xl font-bold text-[#B00023] text-center">
          Trending
        </h5>

        {/* Right Horizontal Line */}
        <div className="flex items-center gap-1">
          <hr className="w-20 sm:w-32 h-px bg-gray-400 border-0" />
          {/* Right vertical cap */}
          <div className="w-px h-6 bg-gray-400" />
        </div>
      </div>

      {/* Trending Grid Items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        {news?.map((story, i) => (
          <Link
          href={`/${story?.category?.slug}/${story?.slug}`}
          key={i}>
            <img
              src={`${base_url}${story?.image}`}
              alt={story?.alt}
              className="w-full h-48 object-cover rounded-md mb-2"
            />
            <p className="text-lg hover:underline text-black font-bold cursor-pointer">
             {story?.title}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Trending;
