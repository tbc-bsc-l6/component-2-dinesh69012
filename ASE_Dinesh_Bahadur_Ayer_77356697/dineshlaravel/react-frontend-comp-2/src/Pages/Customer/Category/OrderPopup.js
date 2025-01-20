// OrderPopup.js
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import baseURL from '../../../Services/Apis/api';

const OrderPopup = () => {

    const { petId, sellerId } = useParams();

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        contact: '',
    });

    const handleInputChange = (e) => {
        setFormData({
        ...formData,
        [e.target.id]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const userId = localStorage.getItem('userId');

        const traderId = 2;

        // Construct the data object
        const orderData = {
        name: formData.name,
        address: formData.address,
        contact: formData.contact,
        trader_id: sellerId,
        pet_id: petId, // Replace with the actual pet ID logic
        customer_id: userId,
        };
        console.log(orderData);


        // Assume you have an API endpoint to handle the order creation
        try {
        const response = await axios.post(baseURL+"order/create", orderData);
        console.log('Order placed successfully',response.data) 
        navigate(`/success/${petId}`);      
        } catch (error) {
        console.error('Error:', error);
        }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Checkout</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring focus:border-orange-400"
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="address" className="block text-sm font-medium text-gray-600">
              Address
            </label>
            <input
              type="text"
              id="address"
              className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring focus:border-orange-400"
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="contact" className="block text-sm font-medium text-gray-600">
              Contact
            </label>
            <input
              type="text"
              id="contact"
              className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring focus:border-orange-400"
              onChange={handleInputChange}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 focus:outline-none focus:ring focus:border-orange-400"
          >
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default OrderPopup;
