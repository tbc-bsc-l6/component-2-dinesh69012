import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setLogin, setSignup } from '../../../Services/Redux-Service/counterSlice';
import { ShoppingBasket, User, Heart } from 'lucide-react';
import Login from '../LoginSignupPage/Login';
import Signup from '../LoginSignupPage/Signup';

function Navbar(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("userId");
    navigate('/');
  };

  const handleWishlist = () => {
    console.log('Wishlist clicked');
  };

  return (
    <>
      <Login setLogin={setLogin} />
      <Signup setSignup={setSignup} />
      
      <div className='fixed top-0 left-0 right-0 z-50 bg-white shadow-sm'>
        <div className='flex items-center justify-between px-8 py-4 max-w-7xl mx-auto'>
          <div className='flex items-center gap-2'>
            <ShoppingBasket className="h-6 w-6 text-green-600" />
            <Link to="/" className="text-2xl font-bold text-gray-900">
              Fresh<span className="text-green-600">Market</span>
            </Link>
          </div>

          <div className='flex items-center space-x-8'>
            <nav>
              <ul className='flex items-center space-x-6'>
                <li>
                  <Link to="/" className="text-gray-600 hover:text-green-600 transition-colors">Home</Link>
                </li>
                <li>
                  <Link to="/categorie" className="text-gray-600 hover:text-green-600 transition-colors">Categories</Link>
                </li>
                <li>
                  <Link 
                    to="/" 
                    onClick={props.onJoinUsClick} 
                    className="text-gray-600 hover:text-green-600 transition-colors"
                  >
                    Become a Partner
                  </Link>
                </li>

                {localStorage.getItem("userId") ? (
                  <li className="relative">
                    <button
                      onClick={toggleDropdown}
                      className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                    >
                      <User className="h-5 w-5 text-gray-600" />
                    </button>

                    {isDropdownOpen && (
                      <div className="absolute right-0 mt-2 w-48 rounded-xl shadow-lg bg-white ring-1 ring-black ring-opacity-5 border border-gray-100">
                        <div className="py-1" role="menu">
                          <button
                            onClick={handleWishlist}
                            className="flex items-center gap-2 w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                            role="menuitem"
                          >
                            <Heart className="h-4 w-4" />
                            My Favorites
                          </button>
                          <button
                            onClick={handleLogout}
                            className="flex items-center gap-2 w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                            role="menuitem"
                          >
                            <User className="h-4 w-4" />
                            Sign Out
                          </button>
                        </div>
                      </div>
                    )}
                  </li>
                ) : (
                  <>
                    <li>
                      <button
                        onClick={() => dispatch(setSignup(true))}
                        className="px-4 py-2 rounded-xl text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
                      >
                        Sign Up
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => dispatch(setLogin(true))}
                        className="px-4 py-2 rounded-xl bg-green-600 text-white hover:bg-green-700 transition-colors"
                      >
                        Sign In
                      </button>
                    </li>
                  </>
                )}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar