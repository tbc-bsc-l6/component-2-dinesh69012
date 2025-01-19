// OrderPlacedPage.js
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import getPetbyId from '../../../Services/Users/getPetbyId';
import imgURL from '../../../Services/Apis/imageurl';

const OrderPlacedPage = () => {

    const {petId} = useParams();
    const [data, setData] = useState({});

    async function fetchData() {
        try {
          const response = await getPetbyId(petId); 
          setData(response.pet);        
        } catch (error) {
            console.error(error)
        }
      }
      useEffect(() => {
        fetchData();
      },[]); 

  // Dummy product details (replace with your actual data)
  const product = {
    name: 'Product Name',
    price: '$99.99',
    image: 'https://example.com/product-image.jpg',
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96 text-center">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Your Order Is Placed!</h2>
        
        {/* Product Details */}
        <img src={imgURL+data.image_url} alt={data.name} className="mb-4 mx-auto max-w-full" />
        <h3 className="text-xl font-semibold mb-2">{data.name}</h3>
        <p className="text-gray-600 mb-4">₹{data.price}</p>

        <p className='mb-2'>The estimate time for the delivery is 2 to 3 days. and payment method is cash on delivery </p>

        {/* Button to Redirect */}
        <Link to="/" className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 focus:outline-none focus:ring focus:border-orange-400 inline-block">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default OrderPlacedPage;
