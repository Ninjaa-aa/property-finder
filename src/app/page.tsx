'use client'
import SearchBar from './components/SearchBar';
import PropertyCard from './components/PropertyCard';
import { useState } from 'react';
import Modal from './components/Modal';
import { BellRing, MapPin, ArrowRight, TrendingUp, ArrowUpRight } from 'lucide-react';
import PriceGraph from './components/PriceGraph';

const SAMPLE_PROPERTIES = [
  {
    id: 1,
    company: 'Premium Estates',
    contactPerson: 'Ahmed Khan',
    location: 'Islamabad, F-8',
    size: '5 marla',
    price: 'PKR 11,519,000',
    contactPhone: '+92 333 5551234',
    contactEmail: 'ahmed@premiumestates.pk',
    bedrooms: '3',
    websiteUrl: 'https://zameen.com/property/123456',
    sourceSite: 'Zameen.com'
  },
  {
    id: 2,
    company: 'Royal Properties',
    contactPerson: 'Sara Malik',
    location: 'Karachi, DHA Phase 6',
    size: '10 marla',
    price: 'PKR 18,700,000',
    contactPhone: '+92 300 1234567',
    contactEmail: 'sara@royalproperties.pk',
    bedrooms: '4',
    websiteUrl: 'https://graana.com/property/789012',
    sourceSite: 'Graana.com'
  },
  {
    id: 3,
    company: 'Diamond Realtors',
    contactPerson: 'Usman Ali',
    location: 'Lahore, Bahria Town',
    size: '1 kanal',
    price: 'PKR 22,350,000',
    contactPhone: '+92 321 9876543',
    contactEmail: 'usman@diamondrealtors.pk',
    bedrooms: '5',
    websiteUrl: 'https://aarz.pk/property/345678',
    sourceSite: 'Aarz.pk'
  },
  {
    id: 4,
    company: 'Skyline Properties',
    contactPerson: 'Farah Ahmed',
    location: 'Islamabad, E-11',
    size: '8 marla',
    price: 'PKR 15,200,000',
    contactPhone: '+92 311 7773456',
    contactEmail: 'farah@skylineproperties.pk',
    bedrooms: '3',
    websiteUrl: 'https://zameen.com/property/234567',
    sourceSite: 'Zameen.com'
  },
  {
    id: 5,
    company: 'Skyline Properties',
    contactPerson: 'Farah Ahmed',
    location: 'Islamabad, E-11',
    size: '8 marla',
    price: 'PKR 15,200,000',
    contactPhone: '+92 311 7773456',
    contactEmail: 'farah@skylineproperties.pk',
    bedrooms: '3',
    websiteUrl: 'https://zameen.com/property/234567',
    sourceSite: 'Zameen.com'
  },
  
];

// Extract prices for the aggregate graph
const extractPrices = () => {
  const prices = SAMPLE_PROPERTIES.map(prop => {
    const numericPrice = parseFloat(prop.price.replace(/[^0-9.]/g, '')) / 1000000;
    return numericPrice;
  });
  
  // Sort from lowest to highest for better visualization
  return prices.sort((a, b) => a - b);
};

export default function Home() {
  const [isSessionModalOpen, setIsSessionModalOpen] = useState(false);
  
  return (
    <div className="min-h-screen bg-gradient-light">
      <header className="bg-gradient-futuristic text-white py-4 border-b border-gray-800">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent">
              PropertyFinder
            </h1>
            <div className="hidden md:flex ml-8 gap-1">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
              <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" style={{ animationDelay: '0.2s' }}></span>
              <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" style={{ animationDelay: '0.4s' }}></span>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <button 
              onClick={() => setIsSessionModalOpen(true)}
              className="relative flex items-center text-blue-300 hover:text-blue-200 transition-colors btn-icon group"
            >
              <BellRing size={20} className="group-hover:animate-pulse" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">3</span>
            </button>
            <a href="#" className="text-blue-300 hover:text-blue-200 font-medium transition-colors hover:underline">Login</a>
            <a href="#" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-4 py-1.5 rounded-lg transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
              Sign up
            </a>
          </div>
        </div>
      </header>
      
      <SearchBar />
      
      <div className="container mx-auto mt-6 px-6 pb-12">
        {/* Page title and results count */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-medium text-gray-800">Available Properties</h2>
          <span className="text-gray-500 bg-white px-3 py-1 rounded-full border border-gray-200 text-sm">
            {SAMPLE_PROPERTIES.length} listings found
          </span>
        </div>
        
        <div className="flex gap-6">
          {/* 70% Property listings column */}
          <div className="w-[70%]">
            {/* Tab for Best Properties */}
            <div className="flex bg-white rounded-t-lg shadow-sm border-b border-gray-200">
              <div className="w-full text-center py-3 border-b-2 border-blue-600 font-medium text-blue-600">
                Best Properties
              </div>
            </div>
            
            {/* Column headers */}
            <div className="grid grid-cols-4 py-4 px-4 bg-white border-b border-gray-200 text-sm font-medium text-gray-500">
              <div>Company & Contact</div>
              <div>Location</div>
              <div>Size</div>
              <div className="text-right">Price</div>
            </div>
            
            {/* Property listings */}
            <div className="bg-white rounded-b-lg shadow-sm">
              {SAMPLE_PROPERTIES.map((property, index) => (
                <PropertyCard 
                  key={property.id}
                  company={property.company}
                  contactPerson={property.contactPerson}
                  location={property.location}
                  size={property.size}
                  price={property.price}
                  contactPhone={property.contactPhone}
                  contactEmail={property.contactEmail}
                  bedrooms={property.bedrooms}
                  websiteUrl={property.websiteUrl}
                  sourceSite={property.sourceSite}
                  index={index}
                />
              ))}
            </div>
          </div>
          
          {/* 30% Analysis column */}
          <div className="w-[30%] glass-dark text-gray-800 rounded-lg animate-fadeIn">
            <div className="sticky top-4">
              <div className="bg-white p-5 rounded-lg shadow-lg border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-medium text-lg flex items-center">
                    <TrendingUp size={18} className="text-blue-600 mr-2" />
                    Price Analysis
                  </h3>
                  <span className="text-xs text-gray-500 px-2 py-1 bg-gray-100 rounded-full">Islamabad Area</span>
                </div>
                
                <div className="mb-6">
                  <PriceGraph 
                    compactSize={true}
                    propertyName="Aggregate Price Distribution"
                    propertyPrice={Math.max(...extractPrices())}
                    previousPrice={Math.min(...extractPrices())}
                  />
                </div>
                
                <div className="border-t border-gray-100 pt-4">
                  <h4 className="text-sm font-medium text-gray-500 mb-3">PRICE STATS</h4>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Lowest</span>
                      <span className="font-medium">PKR {Math.min(...extractPrices()).toFixed(1)}M</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Average</span>
                      <span className="font-medium">PKR {(extractPrices().reduce((acc, curr) => acc + curr, 0) / extractPrices().length).toFixed(1)}M</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Highest</span>
                      <span className="font-medium">PKR {Math.max(...extractPrices()).toFixed(1)}M</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 border-t border-gray-100 pt-4">
                    <div className="flex justify-between items-center mb-3">
                      <h4 className="text-sm font-medium text-gray-500">MARKET INSIGHT</h4>
                      <span className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded-full">Updated today</span>
                    </div>
                    
                    <p className="text-sm text-gray-600 mb-4">
                      Properties in this area have appreciated by 8.5% in the last 6 months, showing strong market growth.
                    </p>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-xs bg-green-50 text-green-600 font-medium px-2 py-1 rounded-full flex items-center">
                        <ArrowUpRight size={12} className="mr-1" />
                        8.5% growth
                      </span>
                      <button className="text-xs text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
                        Full Report
                        <ArrowRight size={12} className="ml-1" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Session storage modal */}
      <Modal
        isOpen={isSessionModalOpen}
        onClose={() => setIsSessionModalOpen(false)}
        title="New Property Updates"
      >
        <div className="space-y-6">
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
            <div className="flex items-center">
              <div className="bg-blue-100 rounded-full p-2 mr-3">
                <BellRing size={24} className="text-blue-600" />
              </div>
              <div>
                <h4 className="font-medium text-blue-900">Save your session?</h4>
                <p className="text-sm text-blue-700 mt-1">
                  We can remember your search preferences and notify you of new listings.
                </p>
              </div>
            </div>
          </div>
          
          <div className="border rounded-lg divide-y">
            <div className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h5 className="font-medium">New Properties Since Last Visit</h5>
                  <p className="text-sm text-gray-500 mt-1">3 new properties found</p>
                </div>
                <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">New</span>
              </div>
            </div>
            
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-start gap-3">
                <div className="bg-gray-100 rounded-lg h-10 w-10 flex items-center justify-center">
                  <MapPin size={16} className="text-gray-600" />
                </div>
                <div>
                  <h6 className="font-medium">Islamabad, E-11</h6>
                  <p className="text-xs text-gray-500">2 new properties</p>
                </div>
              </div>
            </div>
            
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-start gap-3">
                <div className="bg-gray-100 rounded-lg h-10 w-10 flex items-center justify-center">
                  <MapPin size={16} className="text-gray-600" />
                </div>
                <div>
                  <h6 className="font-medium">Lahore, Bahria Town</h6>
                  <p className="text-xs text-gray-500">1 new property</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex gap-3 justify-end pt-4">
            <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50" onClick={() => setIsSessionModalOpen(false)}>
              Maybe Later
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Save Session
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
