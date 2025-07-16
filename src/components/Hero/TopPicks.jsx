import Link from "next/link";

const TopPicks = ({ news }) => {
  return (
    <div className="p-2">
      <h4 className="text-3xl font-bold text-[#B00020] text-center mb-4">
        Top Picks
      </h4>
      <div className="flex flex-col gap-4">
        {news?.slice(0, 5)?.map((item, index) => (
          <Link href={`/${item?.category?.slug}/${item?.slug}`} key={index}>
            <p className="text-md hover:underline cursor-pointer">
              {item.subtitle}
            </p>
            {index < 3 && <hr className="h-px my-2 bg-gray-200 border-0" />}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TopPicks;
