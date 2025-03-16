import SearchBar from './components/SearchBar';
import PropertyCard from './components/PropertyCard';

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
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <header className="bg-gray-900 text-white">
        <div className="container mx-auto px-6 py-3 flex items-center justify-between">
          <h1 className="text-2xl font-bold">PropertyFinder</h1>
          <nav className="flex gap-6">
            <a href="#" className="hover:text-blue-400 transition-colors">Buy</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Rent</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Sell</a>
          </nav>
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
        
        {/* Tabs for Best and Cheapest */}
        <div className="flex border-b mb-6 bg-white rounded-t-lg shadow-sm">
          <div className="flex-1 text-center py-3 border-b-2 border-blue-600 font-medium text-blue-600">
            Best
          </div>
          <div className="flex-1 text-center py-3 text-gray-600 flex items-center justify-center">
            Cheapest <span className="text-gray-500 ml-2 text-sm">from PKR 11,519,000</span>
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
          {SAMPLE_PROPERTIES.map((property) => (
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
            />
          ))}
        </div>
      </div>
    </div>
  );
}
