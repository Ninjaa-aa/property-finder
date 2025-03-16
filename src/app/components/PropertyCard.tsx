'use client';
import { MapPin, User, Building, Phone, Mail, Bed, ExternalLink, TrendingUp, Heart } from 'lucide-react';
import { useState } from 'react';
import Modal from './Modal';
import GraphModal from './GraphModal';

interface PropertyCardProps {
  company: string;
  contactPerson: string;
  location: string;
  size: string;
  price: string;
  contactPhone?: string;
  contactEmail?: string;
  bedrooms?: string;
  websiteUrl?: string;
  sourceSite?: string;
  index?: number;
}

export default function PropertyCard({
  company,
  contactPerson,
  location,
  size,
  price,
  contactPhone = "+92 300 1234567",
  contactEmail = "contact@example.com",
  bedrooms = "3",
  websiteUrl = "https://example.com/property/123",
  sourceSite = "Zameen.com",
  index = 0
}: PropertyCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isGraphModalOpen, setIsGraphModalOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  
  // Calculate staggered animation delay based on index
  const animationDelay = `${index * 0.05}s`;
  
  // Convert price string to numeric value for the graph (assuming format "PKR X,XXX,XXX")
  const currentPrice = parseFloat(price.replace(/[^0-9.]/g, '')) / 1000000;
  // Generate a "previous price" that's slightly lower (for demo purposes)
  const previousPrice = currentPrice * 0.85;
  
  return (
    <>
      <div 
        className="border-b border-gray-200 hover:bg-gray-50/50 transition-all property-card-hover cursor-pointer animate-slideInRight backdrop-blur-sm"
        style={{ animationDelay }}
      >
        <div className="flex items-center justify-between px-4 py-5 group">
          <div className="flex-1">
            <div className="flex items-center">
              <h3 className="text-lg font-medium group-hover:text-blue-600 transition-colors">{company}</h3>
              <div 
                className="ml-2 p-1.5 rounded-full hover:bg-gray-100 cursor-pointer transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsFavorite(!isFavorite);
                }}
              >
                <Heart 
                  size={16} 
                  className={`${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-400'} transition-colors hover:scale-110 transform`} 
                />
              </div>
            </div>
            <div className="flex items-center mt-1 text-gray-600">
              <User className="w-4 h-4 mr-1 opacity-70" />
              <span className="text-sm">{contactPerson}</span>
            </div>
          </div>
          
          <div className="flex-1">
            <div className="flex items-center text-gray-600 group-hover:text-gray-700 transition-colors">
              <MapPin className="w-4 h-4 mr-1 opacity-70 group-hover:text-blue-500 transition-colors" />
              <span>{location}</span>
            </div>
          </div>
          
          <div className="flex-1">
            <div className="flex items-center text-gray-600 group-hover:text-gray-700 transition-colors">
              <Building className="w-4 h-4 mr-1 opacity-70 group-hover:text-blue-500 transition-colors" />
              <span>{size}</span>
            </div>
          </div>
          
          <div className="flex-1 text-right">
            <div className="font-semibold text-lg group-hover:text-blue-600 transition-colors group-hover:scale-105 transform">{price}</div>
            <button 
              className="text-xs text-gray-500 hover:text-blue-600 mt-1 transition-colors flex items-center justify-end gap-1 group-hover:opacity-100 opacity-0"
              onClick={(e) => {
                e.stopPropagation();
                setIsGraphModalOpen(true);
              }}
            >
              <TrendingUp size={12} />
              Price history
            </button>
          </div>
          
          <div className="pl-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <button 
              className="p-2 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors"
              onClick={() => setIsModalOpen(true)}
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        title={`${company} - ${location}`}
      >
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 hover:shadow-md transition-shadow">
              <h4 className="text-sm font-medium text-gray-500 mb-2">CONTACT INFORMATION</h4>
              <div className="space-y-3">
                <div className="flex items-center text-gray-800">
                  <User className="w-4 h-4 mr-2 text-blue-600" />
                  <span>{contactPerson}</span>
                </div>
                <div className="flex items-center text-gray-800">
                  <Phone className="w-4 h-4 mr-2 text-blue-600" />
                  <span>{contactPhone}</span>
                </div>
                <div className="flex items-center text-gray-800">
                  <Mail className="w-4 h-4 mr-2 text-blue-600" />
                  <span>{contactEmail}</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 hover:shadow-md transition-shadow">
              <h4 className="text-sm font-medium text-gray-500 mb-2">PROPERTY DETAILS</h4>
              <div className="space-y-3">
                <div className="flex items-center text-gray-800">
                  <MapPin className="w-4 h-4 mr-2 text-blue-600" />
                  <span>{location}</span>
                </div>
                <div className="flex items-center text-gray-800">
                  <Building className="w-4 h-4 mr-2 text-blue-600" />
                  <span>{size}</span>
                </div>
                <div className="flex items-center text-gray-800">
                  <Bed className="w-4 h-4 mr-2 text-blue-600" />
                  <span>{bedrooms} Bedrooms</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 hover:shadow-blue-100 transition-shadow">
            <div className="flex justify-between items-center">
              <div>
                <h4 className="text-sm font-medium text-blue-800 mb-2">PRICE INFORMATION</h4>
                <div className="text-lg font-bold text-gray-900">{price}</div>
                <div className="text-sm text-blue-700 mt-1">
                  Approximately {(previousPrice * 1000000).toLocaleString()} PKR 6 months ago
                </div>
              </div>
              <button 
                onClick={() => {
                  setIsGraphModalOpen(true);
                }}
                className="flex items-center gap-1 bg-blue-100 text-blue-800 px-3 py-2 rounded-lg hover:bg-blue-200 transition-colors"
              >
                <TrendingUp size={16} />
                <span>View Price History</span>
              </button>
            </div>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 hover:shadow-blue-100 transition-shadow">
            <h4 className="text-sm font-medium text-blue-800 mb-2">SOURCE INFORMATION</h4>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <ExternalLink className="w-4 h-4 mr-2 text-blue-600" />
                <span>Sourced from: {sourceSite}</span>
              </div>
              <a 
                href={websiteUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center hover:underline"
              >
                View Original Listing
                <ExternalLink className="w-3 h-3 ml-1" />
              </a>
            </div>
          </div>
          
          <div className="pt-4 border-t border-gray-200 mt-4">
            <div className="flex justify-between items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">{price}</span>
              <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 flex items-center">
                Contact Agent
              </button>
            </div>
          </div>
        </div>
      </Modal>
      
      <GraphModal
        isOpen={isGraphModalOpen}
        onClose={() => setIsGraphModalOpen(false)}
        propertyName={`${company} - ${location}`}
        currentPrice={currentPrice}
        previousPrice={previousPrice}
      />
    </>
  );
} 