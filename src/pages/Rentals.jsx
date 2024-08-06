import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import vehicle from '../images/vehicle.png';

const Rentals = () => {
  const navigate = useNavigate();

  const handleRentNow = (name) => {
    navigate(`/order-details/${name}`);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <section className="py-8 px-4">
          <h1 className="text-3xl font-bold text-center mb-8">Rentals</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {/* Card 1 */}
            <div className="border rounded-lg overflow-hidden shadow-lg">
              <img src={vehicle} alt="SE03 Lite" className="w-full h-40 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-semibold">SE03 Lite</h2>
                <p className="text-gray-600">Indulge perfect harmony of power and range with this Rhyno. Offering an exhilarating experience with its robust 2000W motor, it ensures a thrilling ride while still delivering an Stable 80-100 km range on a single charge. Like its counterparts, this machine features the safety assurance of a fire-safe advanced LFP battery, along with the comprehensive benefits of owning a Rhino. Boasting a formidable combination of a 2000W motor and a 2.7kWh battery, this beast is ready to roar on the roads, providing an electrifying journey at every turn. Check out the other details below! SE03 LITE</p>
                <button
                  onClick={() => handleRentNow('SE03 Lite')}
                  className="block mt-4 py-2 px-4 bg-yellow-500 text-black text-center rounded hover:bg-yellow-400"
                >
                  Rent Now
                </button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="border rounded-lg overflow-hidden shadow-lg">
              <img src={vehicle} alt="SE03" className="w-full h-40 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-semibold">SE03</h2>
                <p className="text-gray-600">Indulge in the perfect harmony of power and range with this Rhyno. Offering an exhilarating experience with its robust 2000W motor, it ensures a thrilling ride while still delivering an impressive link for SE03 ,Like its counterparts, this machine features the safety assurance of a fire-safe advanced LFP battery, along with the comprehensive benefits of owning a Rhino. Boasting a formidable combination of a 2000W motor and a 2.7kWh battery, this beast is ready to roar on the roads, providing an electrifying journey at every turn. Check out the other details below!</p>
                <button
                  onClick={() => handleRentNow('SE03')}
                  className="block mt-4 py-2 px-4 bg-yellow-500 text-black text-center rounded hover:bg-yellow-400"
                >
                  Rent Now
                </button>
              </div>
            </div>

            {/* Card 3 */}
            <div className="border rounded-lg overflow-hidden shadow-lg">
              <img src={vehicle} alt="SE03 Max" className="w-full h-40 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-semibold">SE03 Max</h2>
                <p className="text-gray-600">Indulge in the perfect harmony of power and range with this Rhyno. Offering an exhilarating experience with its robust 2000W motor, it ensures a thrilling ride while still delivering an impressive 80-100 km range on a single charge. Like its counterparts, this machine features the safety assurance of a fire-safe advanced LFP battery, along with the comprehensive benefits of owning a Rhino. Boasting a formidable combination of a 2000W motor and a 2.7kWh battery, this beast is ready to roar on the roads, providing an electrifying journey at every turn. Check out the other details below!</p>
                <button
                  onClick={() => handleRentNow('SE03 Max')}
                  className="block mt-4 py-2 px-4 bg-yellow-500 text-black text-center rounded hover:bg-yellow-400"
                >
                  Rent Now
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Rentals;
