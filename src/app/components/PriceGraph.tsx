'use client';
import { useEffect, useRef } from 'react';

interface PriceGraphProps {
  propertyName?: string;
  compactSize?: boolean;
  propertyPrice?: number;
  previousPrice?: number;
}

export default function PriceGraph({ 
  propertyName = '',
  compactSize = false,
  propertyPrice = 13.5,
  previousPrice = 11.2
}: PriceGraphProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    
    const ctx = canvasRef.current.getContext('2d');
    if (!ctx) return;
    
    // Data points for demo
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
    
    // If property-specific data is provided, adjust the graph
    let prices = [11.2, 11.5, 12.3, 11.9, 12.7, 13.5]; // in millions PKR
    
    if (propertyName) {
      // Create a property-specific price trend
      prices = [
        previousPrice,
        previousPrice * 1.01,
        previousPrice * 1.02,
        previousPrice * 1.04,
        previousPrice * 1.06,
        propertyPrice
      ];
    }
    
    // Set canvas size based on compactSize prop
    const parentWidth = canvasRef.current.parentElement?.clientWidth || 600;
    canvasRef.current.width = compactSize ? Math.min(400, parentWidth) : parentWidth;
    canvasRef.current.height = compactSize ? 150 : 200;
    
    // Clear canvas
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    
    // Set up constants
    const padding = compactSize ? 20 : 30;
    const chartWidth = canvasRef.current.width - (padding * 2);
    const chartHeight = canvasRef.current.height - (padding * 2);
    const xStep = chartWidth / (months.length - 1);
    
    // Find max price for scaling
    const maxPrice = Math.max(...prices) * 1.1; // Add 10% headroom
    
    // Draw axis
    ctx.beginPath();
    ctx.strokeStyle = '#e5e7eb';
    ctx.lineWidth = 1;
    
    // X-axis
    ctx.moveTo(padding, canvasRef.current.height - padding);
    ctx.lineTo(canvasRef.current.width - padding, canvasRef.current.height - padding);
    
    // Y-axis
    ctx.moveTo(padding, padding);
    ctx.lineTo(padding, canvasRef.current.height - padding);
    ctx.stroke();
    
    // Draw horizontal grid lines
    const gridCount = compactSize ? 3 : 5;
    ctx.beginPath();
    ctx.strokeStyle = '#f3f4f6';
    ctx.setLineDash([5, 5]);
    
    for (let i = 0; i <= gridCount; i++) {
      const y = padding + (chartHeight * i / gridCount);
      ctx.moveTo(padding, y);
      ctx.lineTo(canvasRef.current.width - padding, y);
      
      // Add price label
      ctx.font = '10px Inter, sans-serif';
      ctx.fillStyle = '#6b7280';
      ctx.textAlign = 'right';
      ctx.fillText(`${(maxPrice - (maxPrice * i / gridCount)).toFixed(1)}M`, padding - 5, y + 3);
    }
    ctx.stroke();
    ctx.setLineDash([]);
    
    // Add month labels
    ctx.font = '10px Inter, sans-serif';
    ctx.fillStyle = '#6b7280';
    ctx.textAlign = 'center';
    
    months.forEach((month, i) => {
      const x = padding + (i * xStep);
      ctx.fillText(month, x, (canvasRef.current?.height ?? 0) - padding + 15);
    });
    
    // Draw the line graph
    ctx.beginPath();
    ctx.strokeStyle = '#3b82f6';
    ctx.lineWidth = 3;
    ctx.lineJoin = 'round';
    
    prices.forEach((price, i) => {
      const x = padding + (i * xStep);
      const normalizedPrice = (maxPrice - price) / maxPrice; // Invert for y-coordinate
      const y = padding + (normalizedPrice * chartHeight);
      
      if (i === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    });
    ctx.stroke();
    
    // Draw the gradient area under the line
    const gradient = ctx.createLinearGradient(0, padding, 0, canvasRef.current.height - padding);
    gradient.addColorStop(0, 'rgba(59, 130, 246, 0.5)');
    gradient.addColorStop(1, 'rgba(59, 130, 246, 0.0)');
    
    ctx.beginPath();
    ctx.fillStyle = gradient;
    
    // Start at the bottom left
    ctx.moveTo(padding, canvasRef.current.height - padding);
    
    // Draw the bottom of the area
    prices.forEach((price, i) => {
      const x = padding + (i * xStep);
      const normalizedPrice = (maxPrice - price) / maxPrice;
      const y = padding + (normalizedPrice * chartHeight);
      ctx.lineTo(x, y);
    });
    
    // Go to the bottom right and close the path
    ctx.lineTo(padding + ((prices.length - 1) * xStep), canvasRef.current.height - padding);
    ctx.closePath();
    ctx.fill();
    
    // Add data points
    ctx.fillStyle = '#ffffff';
    ctx.strokeStyle = '#3b82f6';
    ctx.lineWidth = 2;
    
    prices.forEach((price, i) => {
      const x = padding + (i * xStep);
      const normalizedPrice = (maxPrice - price) / maxPrice;
      const y = padding + (normalizedPrice * chartHeight);
      
      ctx.beginPath();
      ctx.arc(x, y, 4, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
    });
    
    // Highlight previous and current price points
    if (propertyName) {
      // First point (previous price)
      ctx.beginPath();
      const x1 = padding;
      const normalizedPrice1 = (maxPrice - prices[0]) / maxPrice;
      const y1 = padding + (normalizedPrice1 * chartHeight);
      ctx.arc(x1, y1, 6, 0, Math.PI * 2);
      ctx.fillStyle = '#fde68a';
      ctx.strokeStyle = '#f59e0b';
      ctx.lineWidth = 2;
      ctx.fill();
      ctx.stroke();
      
      // Last point (current price)
      ctx.beginPath();
      const x2 = padding + ((prices.length - 1) * xStep);
      const normalizedPrice2 = (maxPrice - prices[prices.length - 1]) / maxPrice;
      const y2 = padding + (normalizedPrice2 * chartHeight);
      ctx.arc(x2, y2, 6, 0, Math.PI * 2);
      ctx.fillStyle = '#a7f3d0';
      ctx.strokeStyle = '#10b981';
      ctx.lineWidth = 2;
      ctx.fill();
      ctx.stroke();
    }
    
  }, [propertyName, compactSize, propertyPrice, previousPrice]);

  return (
    <div className={`rounded-lg bg-white p-4 shadow-sm border border-gray-200 animate-fadeIn ${compactSize ? 'text-sm' : ''}`}>
      <h3 className={`${compactSize ? 'text-base' : 'text-lg'} font-medium text-gray-800 mb-2`}>
        {propertyName ? `Price History: ${propertyName}` : 'Average Property Prices (PKR)'}
      </h3>
      <div className="text-xs text-gray-500 mb-4">
        {propertyName 
          ? `Previous: PKR ${previousPrice.toFixed(1)}M → Current: PKR ${propertyPrice.toFixed(1)}M` 
          : 'Last 6 months trend'}
      </div>
      <div className="relative">
        <canvas ref={canvasRef} />
      </div>
    </div>
  );
} 