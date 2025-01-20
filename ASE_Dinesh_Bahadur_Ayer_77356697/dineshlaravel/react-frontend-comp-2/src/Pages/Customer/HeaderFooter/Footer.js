import React from "react";
import { Link } from "react-router-dom";
import { ShoppingBasket, Send, Truck, Gift, Phone, Clock } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Logo Section */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center gap-2">
            <ShoppingBasket className="h-8 w-8 text-green-600" />
            <span className="text-3xl font-bold text-gray-900">
              Fresh<span className="text-green-600">Market</span>
            </span>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-gray-100">
          <div className="flex flex-col items-center text-center">
            <div className="p-3 bg-green-100 rounded-full mb-3">
              <Truck className="h-6 w-6 text-green-600" />
            </div>
            <h4 className="font-medium">Free Delivery</h4>
            <p className="text-sm text-gray-500">On orders over $50</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="p-3 bg-green-100 rounded-full mb-3">
              <Clock className="h-6 w-6 text-green-600" />
            </div>
            <h4 className="font-medium">24/7 Support</h4>
            <p className="text-sm text-gray-500">Customer service</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="p-3 bg-green-100 rounded-full mb-3">
              <Gift className="h-6 w-6 text-green-600" />
            </div>
            <h4 className="font-medium">Special Offers</h4>
            <p className="text-sm text-gray-500">Discounts & more</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="p-3 bg-green-100 rounded-full mb-3">
              <Phone className="h-6 w-6 text-green-600" />
            </div>
            <h4 className="font-medium">Secure Payment</h4>
            <p className="text-sm text-gray-500">100% protected</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-12">
          {/* Newsletter Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Stay Updated</h3>
            <p className="text-gray-600">Subscribe for fresh deals and updates</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 rounded-l-xl border border-gray-200 px-4 py-2 text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-r-xl transition-colors">
                <Send className="h-5 w-5 text-white" />
              </button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors">Delivery Options</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors">Partner Support</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors">Express Shipping</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors">Gift Cards</a></li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">About</h3>
            <ul className="space-y-2">
              <li><Link to="/aboutus" className="text-gray-600 hover:text-green-600 transition-colors">Our Story</Link></li>
              <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors">Partner Network</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors">Organic Commitment</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Help</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors">FAQs</a></li>
              <li><Link to="/contactus" className="text-gray-600 hover:text-green-600 transition-colors">Contact Us</Link></li>
              <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors">Delivery Info</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors">Returns</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-100 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} FreshMarket. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;