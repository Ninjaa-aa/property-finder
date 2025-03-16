'use client';
import { MapPin, Home, DollarSign, Bed, Search } from 'lucide-react';
import { useState } from 'react';

export default function SearchBar() {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <div className="w-full bg-gradient-futuristic text-white py-8">
      <div className="container mx-auto px-6">
        <div className="mb-6 text-center">
          <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-300 to-indigo-200 bg-clip-text text-transparent">Discover Your Perfect Property</h2>
          <p className="text-blue-300 text-lg max-w-2xl mx-auto">Advanced AI-powered search to find exactly what you're looking for</p>
        </div>
        
        <div className={`glass-dark rounded-2xl p-6 shadow-2xl border border-gray-700/30 transition-all ${isExpanded ? 'translate-y-0' : '-translate-y-2'}`}>
          {/* Main search fields */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MapPin className="text-blue-400 group-focus-within:text-blue-300 transition-colors" size={18} />
              </div>
              <input 
                type="text" 
                placeholder="Location" 
                className="bg-gray-800/70 border-2 border-gray-700 focus:border-blue-500 rounded-xl py-3 pl-10 pr-3 w-full text-white placeholder:text-gray-500 outline-none transition-all focus:ring-2 focus:ring-blue-500/20"
              />
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 scale-x-0 group-focus-within:scale-x-100 transition-transform origin-left"></div>
            </div>
            
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Home className="text-blue-400 group-focus-within:text-blue-300 transition-colors" size={18} />
              </div>
              <select className="bg-gray-800/70 border-2 border-gray-700 focus:border-blue-500 rounded-xl py-3 pl-10 pr-3 w-full text-white outline-none transition-all appearance-none focus:ring-2 focus:ring-blue-500/20">
                <option value="" className="bg-gray-800">Property Type</option>
                <option value="house" className="bg-gray-800">House</option>
                <option value="apartment" className="bg-gray-800">Apartment</option>
                <option value="commercial" className="bg-gray-800">Commercial</option>
                <option value="plot" className="bg-gray-800">Plot</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 scale-x-0 group-focus-within:scale-x-100 transition-transform origin-left"></div>
            </div>
            
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <DollarSign className="text-blue-400 group-focus-within:text-blue-300 transition-colors" size={18} />
              </div>
              <select className="bg-gray-800/70 border-2 border-gray-700 focus:border-blue-500 rounded-xl py-3 pl-10 pr-3 w-full text-white outline-none transition-all appearance-none focus:ring-2 focus:ring-blue-500/20">
                <option value="" className="bg-gray-800">Price Range</option>
                <option value="range1" className="bg-gray-800">Under PKR 10M</option>
                <option value="range2" className="bg-gray-800">PKR 10M - 20M</option>
                <option value="range3" className="bg-gray-800">PKR 20M - 30M</option>
                <option value="range4" className="bg-gray-800">Above PKR 30M</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 scale-x-0 group-focus-within:scale-x-100 transition-transform origin-left"></div>
            </div>
            
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Bed className="text-blue-400 group-focus-within:text-blue-300 transition-colors" size={18} />
              </div>
              <select className="bg-gray-800/70 border-2 border-gray-700 focus:border-blue-500 rounded-xl py-3 pl-10 pr-3 w-full text-white outline-none transition-all appearance-none focus:ring-2 focus:ring-blue-500/20">
                <option value="" className="bg-gray-800">Bedrooms</option>
                <option value="1" className="bg-gray-800">1</option>
                <option value="2" className="bg-gray-800">2</option>
                <option value="3" className="bg-gray-800">3</option>
                <option value="4" className="bg-gray-800">4+</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 scale-x-0 group-focus-within:scale-x-100 transition-transform origin-left"></div>
            </div>
          </div>
          
          <div className="mt-6 flex justify-center md:justify-end">
            <button 
              onClick={() => setIsExpanded(!isExpanded)} 
              className="mr-3 text-sm text-blue-300 hover:text-blue-200 flex items-center"
            >
              {isExpanded ? 'Less Options' : 'More Options'}
            </button>
            <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-blue-500/20 transition-all flex items-center gap-2 font-medium group">
              <Search size={18} className="transition-transform group-hover:scale-110" />
              Search
            </button>
          </div>
          
          {/* Advanced filters - shown when expanded */}
          {isExpanded && (
            <div className="mt-6 pt-6 border-t border-gray-700/50 grid grid-cols-2 md:grid-cols-4 gap-4 animate-fadeIn">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1 ml-1">Area (sq. ft)</label>
                <input type="text" className="bg-gray-800/70 border-2 border-gray-700 focus:border-blue-500 rounded-xl py-2 px-3 w-full text-white outline-none transition-all focus:ring-2 focus:ring-blue-500/20" placeholder="Min - Max" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1 ml-1">Year Built</label>
                <input type="text" className="bg-gray-800/70 border-2 border-gray-700 focus:border-blue-500 rounded-xl py-2 px-3 w-full text-white outline-none transition-all focus:ring-2 focus:ring-blue-500/20" placeholder="After (year)" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1 ml-1">Bathrooms</label>
                <select className="bg-gray-800/70 border-2 border-gray-700 focus:border-blue-500 rounded-xl py-2 px-3 w-full text-white outline-none transition-all appearance-none focus:ring-2 focus:ring-blue-500/20">
                  <option value="" className="bg-gray-800">Any</option>
                  <option value="1" className="bg-gray-800">1+</option>
                  <option value="2" className="bg-gray-800">2+</option>
                  <option value="3" className="bg-gray-800">3+</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1 ml-1">Features</label>
                <select className="bg-gray-800/70 border-2 border-gray-700 focus:border-blue-500 rounded-xl py-2 px-3 w-full text-white outline-none transition-all appearance-none focus:ring-2 focus:ring-blue-500/20">
                  <option value="" className="bg-gray-800">Any</option>
                  <option value="garage" className="bg-gray-800">Garage</option>
                  <option value="pool" className="bg-gray-800">Swimming Pool</option>
                  <option value="garden" className="bg-gray-800">Garden</option>
                </select>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 