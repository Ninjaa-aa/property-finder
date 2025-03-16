'use client'
import SearchBar from './components/SearchBar';
import PropertyCard from './components/PropertyCard';
import { useState } from 'react';
import Modal from './components/Modal';
import { BellRing, MapPin } from 'lucide-react';

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
];

export default function Home() {
  const [isSessionModalOpen, setIsSessionModalOpen] = useState(false);
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <header className="bg-gray-900 text-white">
        <div className="container mx-auto px-6 py-3 flex items-center justify-between">
          <h1 className="text-2xl font-bold">Broker AI</h1>
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsSessionModalOpen(true)}
              className="relative flex items-center text-blue-400 hover:text-blue-300 transition-colors"
            >
              <BellRing size={20} className="mr-1" />
              <span className="text-sm">Updates</span>
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">3</span>
            </button>
            <a href="#" className="hover:text-blue-400 transition-colors">Login</a>
            <a href="#" className="bg-blue-600 text-white px-4 py-1.5 rounded-lg hover:bg-blue-700 transition-colors">Sign up</a>
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
