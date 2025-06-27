import Crousel from "./Crousel"



const Missed = () => {



  return (
    <div className="relative w-full px-4 md:px-8 py-6 mb-6">
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
         Our Recent Favorites
        </h5>

        {/* Right Horizontal Line */}
        <div className="flex items-center gap-1">
          <hr className="w-20 sm:w-32 h-px bg-gray-400 border-0" />
          {/* Right vertical cap */}
          <div className="w-px h-6 bg-gray-400" />
        </div>
      </div>

  <div className="max-w-8xl mx-auto">
     <Crousel />
    </div>
      
    </div>
  )
}

export default Missed