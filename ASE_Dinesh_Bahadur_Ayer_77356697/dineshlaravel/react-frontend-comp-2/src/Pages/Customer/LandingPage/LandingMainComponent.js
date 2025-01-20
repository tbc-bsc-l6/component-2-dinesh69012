import React, { useRef } from 'react';
import Landing2ndComp from './Landing2ndComp';
import JoinUs from './JoinUs';
import Navbar from '../HeaderFooter/Navbar';
import Footer from '../HeaderFooter/Footer';
import { Search, Leaf, ShieldCheck, Clock, Truck } from 'lucide-react';

function LandingMainComponent() {
  const joinUsRef = useRef(null);

  const scrollToJoinUs = () => {
    joinUsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar onJoinUsClick={scrollToJoinUs}/>
      <div className='relative min-h-screen w-full overflow-hidden bg-[#F8F9FA]'>
        {/* Hero Section with Split Design */}
        <div className='grid grid-cols-1 lg:grid-cols-2 min-h-screen'>
          {/* Left Content */}
          <div className='flex flex-col justify-center px-8 lg:px-16 py-20 bg-gradient-to-br from-[#2C5282] to-[#2B6CB0]'>
            <div className='max-w-xl'>
              <span className='inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-800 font-medium text-sm mb-6'>
                🌟 Free Delivery on First Order
              </span>
              <h1 className='text-4xl md:text-6xl font-bold text-white leading-tight mb-6'>
                Your Daily Fresh
                <span className='block text-yellow-300'>Grocery Partner</span>
              </h1>
              <p className='text-blue-100 text-lg mb-8 leading-relaxed'>
                Experience the convenience of doorstep delivery with our premium selection of fresh produce, pantry essentials, and gourmet delights.
              </p>
              
              {/* Search Bar */}
              <div className='relative'>
                <input 
                  type="text"
                  placeholder="Search for fruits, vegetables, meat..."
                  className='w-full h-16 px-6 rounded-xl bg-white shadow-lg text-gray-700 text-lg
                           placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-blue-300'
                />
                <button className='absolute right-3 top-1/2 -translate-y-1/2 
                                 bg-yellow-400 hover:bg-yellow-500 text-blue-900 
                                 font-semibold px-8 py-3 rounded-lg transition-all
                                 shadow-md hover:shadow-lg'>
                  <Search className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Image Section */}
          <div className='relative hidden lg:block'>
            <img 
              src="https://images.unsplash.com/photo-1543168256-418811576931?auto=format&fit=crop&q=80"
              alt="Fresh vegetables and fruits"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className='absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent'></div>
            
            {/* Feature Cards */}
            <div className='absolute bottom-0 left-0 right-0 p-8 grid grid-cols-2 gap-4'>
              <div className='bg-white/90 backdrop-blur-sm p-6 rounded-2xl'>
                <div className='flex items-center gap-4 mb-2'>
                  <div className='p-3 bg-green-100 rounded-full'>
                    <Leaf className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className='font-semibold text-gray-800'>100% Organic</h3>
                </div>
                <p className='text-sm text-gray-600'>Certified organic products from trusted farmers</p>
              </div>
              <div className='bg-white/90 backdrop-blur-sm p-6 rounded-2xl'>
                <div className='flex items-center gap-4 mb-2'>
                  <div className='p-3 bg-blue-100 rounded-full'>
                    <ShieldCheck className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className='font-semibold text-gray-800'>Quality Assured</h3>
                </div>
                <p className='text-sm text-gray-600'>Rigorous quality checks at every step</p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className='absolute bottom-0 left-0 right-0 bg-white/80 backdrop-blur-md 
                      border-t border-gray-200 py-6 px-4 lg:hidden'>
          <div className='grid grid-cols-2 gap-4 max-w-md mx-auto'>
            <div className='flex items-center gap-3'>
              <Clock className="h-5 w-5 text-blue-600" />
              <div>
                <p className='font-medium text-gray-800'>Same Day</p>
                <p className='text-sm text-gray-600'>Delivery</p>
              </div>
            </div>
            <div className='flex items-center gap-3'>
              <Truck className="h-5 w-5 text-green-600" />
              <div>
                <p className='font-medium text-gray-800'>Free Shipping</p>
                <p className='text-sm text-gray-600'>Over $50</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Landing2ndComp/>
      <div ref={joinUsRef}><JoinUs /></div>
      <Footer/>
    </>
  );
}

export default LandingMainComponent;