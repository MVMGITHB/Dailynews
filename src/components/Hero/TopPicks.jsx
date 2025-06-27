import Link from "next/link";

const TopPicks = ({news}) => {
  return (
    <div className="p-2">
      <h4 className="text-3xl font-bold text-[#B00020] text-center mb-4">
        Top Picks
      </h4>

     <div className="flex flex-col gap-4">
  {/* Repeating Entries */}
  {news?.slice(0, 4)?.map((item, index) => (
    <Link 
    href={`/${item?.category?.slug}/${item?.slug}`}
    key={index}>
      <p className="text-xl hover:underline cursor-pointer">
        {item.subtitle}
      </p>
      <h5 className="text-xs underline uppercase font-bold text-gray-600">
       
      </h5>
      {index < 3 && (
        <hr className="h-px my-2 bg-gray-200 border-0" />
      )}
    </Link>
  ))}
</div>

    </div>
  );
};

export default TopPicks;
