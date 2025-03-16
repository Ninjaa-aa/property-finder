'use client';
import { MapPin, User, Building, Phone, Mail, Bed, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import Modal from './Modal';

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
  sourceSite = "Zameen.com"
}: PropertyCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  return (
    <>
      <div 
        className="border-b border-gray-200 py-5 hover:bg-gray-50 transition-colors property-card-hover cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="flex items-center justify-between px-4">
          <div className="flex-1">
            <h3 className="text-lg font-medium">{company}</h3>
            <div className="flex items-center mt-1 text-gray-600">
              <User className="w-4 h-4 mr-1" />
              <span className="text-sm">{contactPerson}</span>
            </div>
          </div>
          
          <div className="flex-1">
            <div className="flex items-center text-gray-600">
              <MapPin className="w-4 h-4 mr-1" />
              <span>{location}</span>
            </div>
          </div>
          
          <div className="flex-1">
            <div className="flex items-center text-gray-600">
              <Building className="w-4 h-4 mr-1" />
              <span>{size}</span>
            </div>
          </div>
          
          <div className="flex-1 text-right">
            <div className="font-semibold text-lg">{price}</div>
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
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
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
            
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
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
          
          <div className="mt-4 bg-blue-50 p-4 rounded-lg border border-blue-100">
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
                className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
              >
                View Original Listing
                <ExternalLink className="w-3 h-3 ml-1" />
              </a>
            </div>
          </div>
          
          <div className="pt-4 border-t border-gray-200 mt-4">
            <div className="flex justify-between items-center">
              <span className="text-2xl font-bold text-gray-900">{price}</span>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center">
                Contact Agent
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
} 