import { MapPin, Home, DollarSign, Bed } from 'lucide-react';

export default function SearchBar() {
  return (
    <div className="w-full bg-gray-900 text-white py-6">
      <div className="container mx-auto px-6">
        <h1 className="text-xl font-medium mb-4">Find Your Perfect Property</h1>
        
        {/* Main search fields */}
        <div className="grid grid-cols-4 gap-3">
          <div className="bg-gray-800 rounded-lg flex items-center px-4 py-3">
            <MapPin className="text-gray-400 mr-3" size={18} />
            <input 
              type="text" 
              placeholder="Location" 
              className="bg-transparent border-none outline-none w-full text-white placeholder:text-gray-400"
            />
          </div>
          
          <div className="bg-gray-800 rounded-lg flex items-center px-4 py-3">
            <Home className="text-gray-400 mr-3" size={18} />
            <select className="bg-transparent border-none outline-none w-full text-white">
              <option value="" className="bg-gray-800">Property Type</option>
              <option value="house" className="bg-gray-800">House</option>
              <option value="apartment" className="bg-gray-800">Apartment</option>
              <option value="commercial" className="bg-gray-800">Commercial</option>
              <option value="plot" className="bg-gray-800">Plot</option>
            </select>
          </div>
          
          <div className="bg-gray-800 rounded-lg flex items-center px-4 py-3">
            <DollarSign className="text-gray-400 mr-3" size={18} />
            <select className="bg-transparent border-none outline-none w-full text-white">
              <option value="" className="bg-gray-800">Price Range</option>
              <option value="range1" className="bg-gray-800">Under PKR 10M</option>
              <option value="range2" className="bg-gray-800">PKR 10M - 20M</option>
              <option value="range3" className="bg-gray-800">PKR 20M - 30M</option>
              <option value="range4" className="bg-gray-800">Above PKR 30M</option>
            </select>
          </div>
          
          <div className="bg-gray-800 rounded-lg flex items-center px-4 py-3">
            <Bed className="text-gray-400 mr-3" size={18} />
            <select className="bg-transparent border-none outline-none w-full text-white">
              <option value="" className="bg-gray-800">Bedrooms</option>
              <option value="1" className="bg-gray-800">1</option>
              <option value="2" className="bg-gray-800">2</option>
              <option value="3" className="bg-gray-800">3</option>
              <option value="4" className="bg-gray-800">4+</option>
            </select>
          </div>
        </div>
        
        <div className="mt-4 flex justify-end">
          <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg font-medium transition-colors">
            Search
          </button>
        </div>
      </div>
    </div>
  );
} 