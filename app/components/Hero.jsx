import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const featuredImageWidth = 70;

const Hero = () => {
  return (
    <div className="w-full h-full p-12 bg-gradient-to-br from-green-500 to-sky-500 rounded-xl mt-12">
      <h1 className="text-white lg:text-5xl font-semibold">Featured</h1>
      <div className="flex gap-4 mt-8">
        <div className="flex gap-8 justify-between items-center bg-white border-2 border-transparent hover:bg-slate-100 rounded-lg px-8 py-4 transition-all duration-200 ease-in-out">
          <Image 
          src="/images/euroLogo.svg"
          width={featuredImageWidth}
          height={featuredImageWidth}
          />
          <div className="flex flex-col items-start self-center">
            <h2 className="text-red-400 font-medium text-lg">LIVE</h2>
            <p className="text-2xl font-semibold">UEFA Euro 2024</p>
          </div>
        </div>
        <div className="flex gap-8 justify-between items-center bg-white hover:bg-slate-100 rounded-lg px-8 py-4 transition-all duration-200 ease-in-out">
          <Image 
          src="/images/clLogo.svg"
          width={featuredImageWidth}
          height={featuredImageWidth}
          />
          <div className="flex flex-col items-start self-center">
            <h2 className="text-blue-400 font-medium text-lg">ENDED</h2>
            <p className="text-2xl font-semibold">UEFA Champions League 2024</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero