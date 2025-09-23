import React, { useState } from 'react';
import '../global.css';
import logoImage from '/eduventures.png';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log('Search query:', searchQuery);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav className='w-full h-16 md:h-20 lg:h-24 bg-white flex items-center justify-between px-4 md:px-6 lg:px-8 shadow-sm border-b border-gray-200'>
        {/* Logo Section */}
        <div className="flex items-center space-x-2 md:space-x-6 lg:space-x-8">
          <div className="logo">
            <img 
              src={logoImage} 
              alt="Infinova Eduventures - Bridging your Career" 
              className="h-10 md:h-12 lg:h-16 w-auto"
            />
          </div>
          
          {/* For Students Text - Always visible */}
          <div className="text-blue-600 font-semibold text-xs md:text-lg lg:text-xl">
            For Students
          </div>
        </div>

        {/* Desktop Search Section - Hidden on mobile */}
        <div className="hidden md:flex items-center space-x-2 flex-1 max-w-xl lg:max-w-3xl mx-4 lg:mx-10">
          {/* Search Icon Outside */}
          <div className="flex items-center">
            <svg 
              className="h-5 w-5 lg:h-6 lg:w-6 text-gray-400" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
              />
            </svg>
          </div>
          
          {/* Search Form */}
          <form onSubmit={handleSearchSubmit} className="flex flex-1">
            <input
              type="text"
              placeholder="What do you want to learn ?"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full px-6 lg:px-8 py-3 md:py-4 lg:py-6 h-10 md:h-12 lg:h-14 border border-gray-300 rounded-l-md text-sm md:text-base lg:text-lg leading-5 lg:leading-6 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
            />
            
            <button
              type="submit"
              className="bg-black text-white px-8 md:px-10 lg:px-16 h-10 md:h-12 lg:h-14 rounded-r-md hover:bg-gray-800 transition-colors duration-200 font-medium text-sm md:text-base lg:text-lg"
            >
              Search
            </button>
          </form>
        </div>

        {/* Mobile Search Icon */}
        <div className="flex items-center md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <svg 
              className="h-6 w-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Search Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 shadow-lg">
          <div className="px-4 py-4">
            {/* Mobile Search */}
            <div className="flex items-center space-x-2">
              {/* Mobile Search Icon Outside */}
              
              {/* Mobile Search Form */}
              <form onSubmit={handleSearchSubmit} className="flex flex-1">
                <input
                  type="text"
                  placeholder="What do you want to learn ?"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="block w-full px-5 py-4 h-12 border border-gray-300 rounded-l-md text-base leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                />
                
                <button
                  type="submit"
                  className="bg-black text-white px-8 h-12 rounded-r-md hover:bg-gray-800 transition-colors duration-200 font-medium text-base"
                >
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
