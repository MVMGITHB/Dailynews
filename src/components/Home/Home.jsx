import FirstHero from "../Hero/FirstHero";
import TopPicks from "../Hero/TopPicks";
import LatestNews from "../Hero/LatestNews";
import Trending from "../HeroSection/Trending";
import Missed from "../HeroSection/Missed";
import { base_url } from "../Helper/helper";
import Image from "next/image";
import Link from "next/link";

const Home = ({ news }) => {
  // Guard for empty data
  if (!news || !Array.isArray(news) || news.length === 0) {
    return <div>Loading...</div>;
  }

  const firstArticle = news[0];
  const secondArticle = news[1];
  const thirdArticle = news[2];
  const fourthArticle = news[3];

  return (
    <>
      <div className="w-full mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-4 gap-6">

        {/* LEFT - TOP PICKS */}
        <div className="md:col-span-1">
          <a
            href="http://www.intellectmedia.net/trk/click.asp?cid=3203&pid=661&did=23840&code=326"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full"
          >
            <Image
              src="/images/aditybirla.png"
              alt="Ad"
              priority
              className="mt-4 rounded w-full h-auto object-contain"
              width={300}
              height={200}
            />
          </a>

          <TopPicks news={news} />

          <div className="mt-4 space-y-1">
            <hr className="h-px bg-gray-400 border-0" />
            <hr className="h-px bg-gray-400 border-0" />
            <hr className="h-px bg-gray-400 border-0" />
          </div>
        </div>

        {/* CENTER - HERO */}
        <div className="md:col-span-2">
          <div className="max-w-4xl mx-auto px-2 py-6">
            <div className="border-l border-r border-gray-300 p-4">

              {/* LIVE BADGE */}
              <div className="flex items-center gap-2 mb-4">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
                </span>
                <span className="text-sm font-semibold text-red-600">Live</span>
              </div>

              {/* MAIN H1 */}
              <div className="mb-4">
                <Link href={`/${firstArticle?.category?.slug}/${firstArticle?.slug}`}>
                  <h1 className="text-4xl font-bold text-black hover:underline mb-2">
                    {firstArticle?.title}
                  </h1>
                </Link>

                <h2 className="text-md hover:underline mb-2">
                  {firstArticle?.subtitle}
                </h2>

                <p className="text-xs underline uppercase font-bold text-gray-600">
                  THE HINDU BUREAU
                </p>
              </div>

              {/* MAIN IMAGE */}
              <Link
                href={`/${firstArticle?.category?.slug}/${firstArticle?.slug}`}
              >
                <img
                  src={`${base_url}${firstArticle?.image}`}
                  alt={firstArticle?.title}
                  className="w-full h-auto rounded-md shadow object-cover"
                />
              </Link>

              <hr className="h-px my-4 bg-gray-200 border-0" />

              {/* SECOND LIVE */}
              <div className="flex items-center gap-2 mb-4">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
                </span>
                <span className="text-md font-semibold text-red-600">Live</span>
              </div>

              {/* TWO COLUMN SECTION */}
              <div className="flex flex-col md:flex-row gap-2">

                {/* LEFT */}
                <div className="md:w-1/2 p-2">
                  <Link
                    href={`/${secondArticle?.category?.slug}/${secondArticle?.slug}`}
                  >
                    <h3 className="text-2xl font-bold hover:underline mb-3">
                      {secondArticle?.title}
                    </h3>
                    <img
                      src={`${base_url}${secondArticle?.image}`}
                      alt={secondArticle?.alt}
                      className="w-full h-auto rounded-md shadow mt-4"
                    />
                  </Link>
                </div>

                {/* DIVIDER */}
                <div className="hidden md:flex justify-center">
                  <div className="w-px bg-gray-300 h-full"></div>
                </div>

                {/* RIGHT */}
                <div className="md:w-1/2 p-2">
                  <Link
                    href={`/${thirdArticle?.category?.slug}/${thirdArticle?.slug}`}
                  >
                    <h3 className="text-2xl font-bold hover:underline mb-4">
                      {thirdArticle?.title}
                    </h3>
                  </Link>

                  <hr className="h-px my-2 bg-gray-200 border-0" />

                  <Link
                    href={`/${fourthArticle?.category?.slug}/${fourthArticle?.slug}`}
                  >
                    <h3 className="text-2xl font-bold hover:underline mt-4">
                      {fourthArticle?.title}
                    </h3>
                  </Link>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* RIGHT - LATEST NEWS */}
        <div className="md:col-span-1">
          <LatestNews news={news} />

          <div className="mt-4 space-y-1">
            <hr className="h-px bg-gray-400 border-0" />
            <hr className="h-px bg-gray-400 border-0" />
            <hr className="h-px bg-gray-400 border-0" />
          </div>

          <a
            href="http://www.intellectmedia.net/trk/click.asp?cid=3203&pid=661&did=23840&code=326"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/aditybirla.png"
              alt="Ad"
              className="mt-4 rounded w-full h-auto object-contain"
              width={300}
              height={200}
            />
          </a>
        </div>
      </div>

      <div className="py-4">
        <Trending news={news} />
      </div>

      <Missed />
    </>
  );
};

export default Home;
