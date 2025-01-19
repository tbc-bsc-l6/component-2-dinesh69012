import React, { useEffect, useState } from 'react';
import getAllcategory from '../../Services/Seller/getAllcategory';
import axios from 'axios';
import addPet from '../../Services/Seller/addPet';
import { useNavigate } from 'react-router-dom';

const AddPetForm = (props) => {
  const userId = localStorage.getItem('sellerId');  
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    category_id: null,
    description: '',
    price: '',
    image: null,
    seller_id: userId,
  });

  
  const [categories, setCategories] = useState([]);

  async function fetchCategory(){
    const response = await getAllcategory();
    setCategories(response.categories);
  }
  useEffect(()=>{
    fetchCategory();
  },[]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
 

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, image: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Create a new FormData object
    const petData = new FormData();   
    petData.append('name', formData.name);
    petData.append('category_id', formData.category_id);
    petData.append('description', formData.description);
    petData.append('price', formData.price);
    petData.append('seller_id', userId);
  
    
    petData.append('image', formData.image);
  
    
    try {
      const response = await addPet(petData);
      console.log(response);
      props.setAdd(false);
      navigate('/petsSell');

      
      setFormData({
        name: '',
        category: '',
        description: '',
        price: '',
        image: null, 
      });
    } catch (error) {
      console.error('Error posting the pet', error);
    }
  };
  

  return (props.add)?
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white shadow-md p-8 rounded-md">
        <h2 className="text-2xl font-bold mb-4">Add Product</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label htmlFor="name" className="block text-sm font-semibold mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none"
            />
          </div>
          {/* Add dropdown for categories */}
          {/* Replace the following select with your dropdown component */}
          <div className="mb-4">
            <label htmlFor="category" className="block text-sm font-semibold mb-2">Category</label>
            <select
              name="category_id"
              value={formData.category_id}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none"
            >
              <option value="">Select Category</option>
              {categories.map((category, index) => (
                <option key={category.id} value={category.id}>
                  {category.category_name}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="block text-sm font-semibold mb-2">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none"
            ></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="price" className="block text-sm font-semibold mb-2">Price</label>
            <input
              type="text"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="image" className="block text-sm font-semibold mb-2">Upload Image</label>
            <input
              type="file"
              name="image"
              onChange={handleImageChange}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none"
            />
          </div>
          <div className="text-right">
          <button
          onClick={()=>props.setAdd(false)}
              className="px-4 py-2 m-2 bg-black text-white rounded hover:bg-opacity-80 focus:outline-none"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-black text-white rounded hover:bg-opacity-80 focus:outline-none"
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  :"";
};

export default AddPetForm;
