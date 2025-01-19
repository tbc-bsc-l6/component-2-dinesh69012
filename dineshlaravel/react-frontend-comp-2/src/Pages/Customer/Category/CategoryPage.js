import React, { useEffect, useState } from "react";
import Navbar from "../HeaderFooter/Navbar";
import Footer from "../HeaderFooter/Footer";
import { Search, ShoppingCart, Heart, Eye } from "lucide-react";
import getVisiblepets from "../../../Services/Users/getVisiblepets";
import getAllcategory from "../../../Services/Seller/getAllcategory";
import { ProductDescription } from "./ProductDescription";

function CategoryPage() {
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedId, setSelectedId] = useState(null); // Track selected product ID
  const [showModal, setShowModal] = useState(false); // Track modal visibility

  async function fetchData() {
    const response = await getVisiblepets();
    setData(response.pets);
  }

  async function fetchCategories() {
    const response = await getAllcategory();
    setCategories(response.categories);
  }

  useEffect(() => {
    fetchData();
    fetchCategories();
  }, []);

  const filteredData = data
    .filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((item) =>
      selectedCategory ? item.category_id === parseInt(selectedCategory, 10) : true
    );

  const openModal = (id) => {
    setSelectedId(id);
    setShowModal(true);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-amber-50">
        {/* Search Section */}
        <div className="flex justify-between p-6 bg-white shadow">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="p-2 border rounded"
          />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="p-2 border rounded"
          >
            <option value="">All Categories</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.category_name}
              </option>
            ))}
          </select>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-3 gap-4 p-6">
          {filteredData.map((item) => (
            <div key={item.id} className="border p-4 shadow rounded">
              <img src={item.image_url} alt={item.name} className="w-full h-40 object-cover" />
              <h3 className="text-xl mt-2">{item.name}</h3>
              <p className="text-gray-600">₹{item.price}</p>
              <button
                onClick={() => openModal(item.id)}
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
              >
                Quick View
              </button>
            </div>
          ))}
        </div>

        {/* Product Description Popup */}
        <ProductDescription id={selectedId} show={showModal} setShow={setShowModal} />
      </div>
      <Footer />
    </>
  );
}

export default CategoryPage;
