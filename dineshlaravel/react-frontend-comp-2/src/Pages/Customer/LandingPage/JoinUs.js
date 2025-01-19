import React from 'react'
import { Leaf } from 'lucide-react'

export function JoinUs() {
  return (
    <div className="relative w-full mb-[300px] bg-gradient-to-b from-[#F8F9FA] to-white">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-100">
            <Leaf className="w-5 h-5 text-green-600" />
          </div>
          <div className="mt-8 flex max-w-max items-center space-x-2 rounded-full bg-green-100 p-1">
            <div className="rounded-full bg-white p-1 px-2">
              <p className="text-sm font-medium">Join Our Program</p>
            </div>
            <p className="text-sm font-medium">Become a Partner &rarr;</p>
          </div>
          <h1 className="mt-8 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl lg:text-6xl">
            Partner with Fresh<span className="text-green-600">Market</span>
          </h1>
          <p className="mt-8 text-lg text-gray-600">
            Join our network of local farmers and producers. Subscribe with your email to become a partner 
            and start offering your fresh, organic products to our community. Verification process takes less than 24 hours.
          </p>
          <form action="" className="mt-8 flex items-start space-x-2">
            <div className="flex-1">
              <input
                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                type="email"
                placeholder="Enter your email"
                id="email"
              ></input>
              <p className="mt-2 text-sm text-gray-500">Bring your fresh produce to our customers</p>
            </div>
            <div>
              <button
                type="button"
                className="rounded-xl bg-green-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 transition-colors duration-200"
              >
                Join Now
              </button>
            </div>
          </form>
          <div className="mt-8 flex items-center gap-4 flex-wrap">
            <div className="flex items-center gap-2">
              <div className="h-px w-6 bg-green-600"></div>
              <span className="text-sm font-medium text-gray-600">Quality Standards</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-px w-6 bg-green-600"></div>
              <span className="text-sm font-medium text-gray-600">Fair Pricing</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-px w-6 bg-green-600"></div>
              <span className="text-sm font-medium text-gray-600">Direct Distribution</span>
            </div>
          </div>
        </div>
        <div className="relative lg:col-span-5 lg:-mr-8 xl:col-span-6">
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
          <img
            className="aspect-[3/2] bg-gray-50 object-cover lg:aspect-[4/3] lg:h-[700px] xl:aspect-[16/9]"
            src="https://images.unsplash.com/photo-1595665593673-bf1ad72905c0?q=80&w=1200"
            alt="Farmer with fresh produce"
          />
        </div>
      </div>
    </div>
  )
}

export default JoinUs;