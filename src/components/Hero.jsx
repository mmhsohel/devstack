import React from 'react'
import heroImage from "../assets/hero.png";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
              Build Your Ideal{' '}
              <span className="text-brand-gradient">Development Stack</span>
            </h1>
            <p className="mt-6 text-lg text-gray-500 max-w-xl mx-auto lg:mx-0">
              Explore frontend, backend, database, and tooling options,
              compare them side by side, and put together the stack that fits your
              next project.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#technologies"
                className="btn-brand inline-flex items-center justify-center px-6 py-3 rounded-full text-base font-semibold shadow-md hover:shadow-lg transition"
              >
                Explore Technologies
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full text-base font-semibold border-2 border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-gray-50 transition"
              >
                Learn More
              </a>
            </div>
          </div>

         <img
  src={heroImage}
  alt="Hero illustration"
  className="w-[40%] object-cover rounded-xl hover:scale-105"
/>
       </div>
      </div>
    </section>
  )
}
