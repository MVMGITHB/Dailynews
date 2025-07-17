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
