'use client';
import { X } from 'lucide-react';
import PriceGraph from './PriceGraph';

interface GraphModalProps {
  isOpen: boolean;
  onClose: () => void;
  propertyName: string;
  currentPrice: number;
  previousPrice: number;
}

export default function GraphModal({ 
  isOpen, 
  onClose, 
  propertyName, 
  currentPrice, 
  previousPrice 
}: GraphModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-opacity-30 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn" onClick={onClose}>
      <div 
        className="bg-white/95 backdrop-blur-md rounded-xl shadow-2xl max-w-md w-full overflow-hidden border border-gray-200/50 animate-slideUp"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200/50">
          <h3 className="text-lg font-semibold text-gray-800">Price History</h3>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-gray-100/80 transition-colors"
          >
            <X size={18} />
          </button>
        </div>
        <div className="p-4">
          <PriceGraph 
            propertyName={propertyName}
            propertyPrice={currentPrice}
            previousPrice={previousPrice}
            compactSize={true}
          />
          
          <div className="mt-4 pt-3 border-t border-gray-200">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <span className="inline-block w-3 h-3 rounded-full bg-yellow-300"></span>
                <span className="text-gray-600">6 months ago</span>
              </div>
              <div className="font-medium">PKR {previousPrice.toFixed(1)}M</div>
            </div>
            
            <div className="flex items-center justify-between text-sm mt-2">
              <div className="flex items-center gap-2">
                <span className="inline-block w-3 h-3 rounded-full bg-green-400"></span>
                <span className="text-gray-600">Current price</span>
              </div>
              <div className="font-medium">PKR {currentPrice.toFixed(1)}M</div>
            </div>
            
            <div className="mt-4 py-3 px-4 bg-blue-50 rounded-lg text-sm text-blue-800">
              <div className="font-medium mb-1">Price Change</div>
              <div className="flex items-center justify-between">
                <span>Growth Rate</span>
                <span className={`font-medium ${currentPrice > previousPrice ? 'text-green-600' : 'text-red-600'}`}>
                  {((currentPrice - previousPrice) / previousPrice * 100).toFixed(1)}%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 