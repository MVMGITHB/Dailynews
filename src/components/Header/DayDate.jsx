"use client";

const DayDate = () => {
  const today = new Date();

  const weekday = today.toLocaleDateString("en-GB", { weekday: "long" }); // Monday
  const day = today.getDate(); // 23
  const month = today.toLocaleDateString("en-GB", { month: "long" }); // June
  const year = today.getFullYear(); // 2025

  const formattedDate = `${weekday}, ${day} ${month}, ${year}`;
  // Output: "Monday, 23 June, 2025"

  return <p className="font-bold text-xl">{formattedDate}</p>;
};

export default DayDate;



// "use client";

// const DayDate = () => {
//   const today = new Date();

//   const weekday = today.toLocaleDateString("en-GB", { weekday: "long" }); // Monday
//   const day = today.getDate(); // 23
//   const month = today.toLocaleDateString("en-GB", { month: "long" }); // June
//   const year = today.getFullYear(); // 2025

//   return (
//     <p className="  font-bold text-xl flex gap-1 ">
//       <span className="text-orange-500">{weekday},</span>
//       <span className="text-gray-300">{day}</span>
//       <span className="text-gray-300">{month},</span>
//       <span className="text-green-500">{year}</span>
//     </p>
//   );
// };

// export default DayDate;
