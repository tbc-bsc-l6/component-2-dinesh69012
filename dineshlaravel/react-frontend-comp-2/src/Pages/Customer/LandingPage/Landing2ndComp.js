import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

export default function Landing2ndComp() {
  const [data] = useState([
    {
      link: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800",
      name: "Fresh Vegetables",
      text: "Farm-Fresh Produce"
    },
    {
      link: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?q=80&w=800",
      name: "Organic Fruits",
      text: "Seasonal Selection"
    },
    {
      link: "https://images.unsplash.com/photo-1608797178974-15b35a64ede9?q=80&w=800",
      name: "Fresh Dairy",
      text: "Local Dairy Products"
    },
    {
      link: "https://images.unsplash.com/photo-1553531384-cc64ac80f931?q=80&w=800",
      name: "Premium Meats",
      text: "Quality Cuts"
    }
  ]);

  const [popup, setPopup] = useState(false);
  const openPopup = () => setPopup(true);
  const closePopup = () => setPopup(false);

  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(0);

  const handleNext = () => {
    setCurrentPage((prevPage) =>
      prevPage + 1 >= Math.ceil(data.length / itemsPerPage) ? 0 : prevPage + 1
    );
  };

  const handlePrev = () => {
    setCurrentPage((prevPage) =>
      prevPage === 0 ? Math.ceil(data.length / itemsPerPage) - 1 : prevPage - 1
    );
  };

  const displayedItems = data.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  );

  return (
    <div className="bg-gradient-to-b from-[#F8F9FA] to-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top Banner */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-green-600 to-emerald-500 mb-16">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=60')] bg-cover bg-center mix-blend-overlay"></div>
          </div>
          <div className="relative py-16 px-8 flex flex-col items-center justify-center text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium mb-4">
              <Sparkles className="h-4 w-4" />
              <span>Discover Fresh Quality</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Explore Our Categories
            </h2>
            <p className="text-green-50 text-lg max-w-2xl">
              From farm-fresh vegetables to premium meats, find everything you need for your kitchen
            </p>
          </div>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayedItems.map((value, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  src={value.link}
                  alt={value.name}
                  onClick={openPopup}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-2">{value.name}</h3>
                  <div className="h-0.5 w-16 bg-green-400 mb-3 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  <p className="text-sm text-green-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {value.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-center gap-6">
          <button
            className="p-3 rounded-full bg-green-100 hover:bg-green-200 text-green-700 transition-colors duration-300"
            onClick={handlePrev}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <div className="h-px w-12 bg-green-200"></div>
          <button
            className="p-3 rounded-full bg-green-100 hover:bg-green-200 text-green-700 transition-colors duration-300"
            onClick={handleNext}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}