import React from 'react'

const LocationSection = () => {
  return (
    <section
      className="w-full h-[85vh] mt-8 bg-no-repeat bg-cover bg-center flex items-center"
      style={{ backgroundImage: "url('/images/location.svg')" }}
    >
      <div className="ml-24 relative">
        {/* Main heading */}
        <h1 className="text-[8vw] font-extrabold text-[#FBE3D2] leading-none">
          RIGHT AROUND
        </h1>

        {/* Rotated 'THE CORNER' box */}
        <div className="rotate-[3deg] mt-2 inline-block z-10 border-[0.5vw] border-[#e9aa56] bg-[#e9aa56] px-4 py-2">
          <h2 className="text-[6vw] font-extrabold text-[#3E1C13] leading-none">
            THE CORNER
          </h2>
        </div>

        {/* Description */}
        <p
          style={{ fontFamily: 'ProximaNova, sans-serif' }}
          className="text-white text-lg mt-6 mb-8 max-w-md font-medium"
        >
          Buy our drinks at your local store or <br /> get them delivered (to your door).
        </p>



        {/* Button */}
        <button className="bg-[#222123] text-[#faeade] text-lg font-bold px-8 py-3 rounded-full ">
          FIND IN STORES
        </button>
      </div>
    </section>
  )
}

export default LocationSection
