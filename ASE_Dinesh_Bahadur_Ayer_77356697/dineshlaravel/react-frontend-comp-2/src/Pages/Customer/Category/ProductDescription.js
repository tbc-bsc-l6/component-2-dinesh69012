import React, { useEffect, useState } from "react";
import { Star, X, Heart, ShoppingBag, Package, Award, Clock } from "lucide-react";
import getPetbyId from "../../../Services/Users/getPetbyId";
import imgURL from "../../../Services/Apis/imageurl";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLogin } from "../../../Services/Redux-Service/counterSlice";

export const ProductDescription = ({ id, show, setShow }) => {
  const [data, setData] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  async function fetchData() {
    try {
      const response = await getPetbyId(id); // Fetch product data using the ID
      setData(response.pet);
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  }

  function handleBuy() {
    if (localStorage.getItem("userId")) {
      navigate(`/checkout/${id}/${data.seller_id}`); // Navigate to checkout
    } else {
      dispatch(setLogin(true)); // Trigger login popup
      navigate("/");
    }
  }

  useEffect(() => {
    if (show && id) {
      fetchData();
    }
  }, [id, show]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="relative w-full max-w-6xl rounded-2xl bg-white shadow-2xl">
          {/* Close Button */}
          <button
            onClick={() => setShow(false)} // Close the popup
            className="absolute right-4 top-4 rounded-full bg-white/90 p-2 text-gray-500 backdrop-blur-sm transition-colors hover:bg-white hover:text-gray-700"
          >
            <X className="h-6 w-6" />
          </button>

          <div className="flex flex-col lg:flex-row">
            {/* Image Section */}
            <div className="relative lg:w-3/5">
              <div className="relative h-[400px] lg:h-[600px]">
                <img
                  src={data.image_url}
                  alt={data.name}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </div>

            {/* Content Section */}
            <div className="flex flex-col p-6 lg:w-2/5 lg:p-8">
              <div className="mb-2 flex items-center gap-2 text-sm font-medium text-amber-600">
                <Package className="h-4 w-4" />
                Artisan Collection
              </div>

              <h2 className="mb-4 font-serif text-3xl font-bold tracking-tight text-gray-900">
                {data.name}
              </h2>

              {/* Rating */}
              <div className="mb-6 flex items-center border-b border-gray-100 pb-6">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-amber-400"
                      fill="currentColor"
                    />
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-600">(Customer Reviews)</span>
              </div>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <p className="text-3xl font-bold text-amber-800">₹{data.price}</p>
                  <p className="text-sm text-gray-500">Including taxes</p>
                </div>
                <p className="mt-2 flex items-center text-sm text-emerald-600">
                  <Clock className="mr-1 h-4 w-4" />
                  Ships in 5-7 business days
                </p>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h3 className="mb-3 text-lg font-medium text-gray-900">
                  About this Piece
                </h3>
                <p className="text-gray-600 leading-relaxed">{data.description}</p>
              </div>

              {/* Actions */}
              <div className="mt-auto space-y-4">
                <button
                  onClick={handleBuy} // Use the original Buy Now logic
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-amber-800 px-8 py-4 text-center font-medium text-white shadow-lg shadow-amber-800/20 transition-all hover:bg-amber-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
                >
                  <ShoppingBag className="h-5 w-5" />
                  Buy Now
                </button>
                <button
                  className="flex w-full items-center justify-center gap-2 rounded-lg border-2 border-amber-800 bg-transparent px-8 py-4 font-medium text-amber-800 transition-colors hover:bg-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
                >
                  <Heart className="h-5 w-5" />
                  Add to Wishlist
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
