import React from 'react';

const Renthome = () => {
  return (
    <>
      <div className="bg-golden">
        <div className="flex justify-between p-5  space-x-4">
          {/* First Image */}
          <div className="w-[48%] shadow-lg h-[400px]">
            <img
              src="https://propertyguide.com.pk/wp-content/uploads/2022/01/DHA-Islamabad.jpg"
              className="w-full h-full object-cover"
              alt="DHA Islamabad"
            />
          </div>
          
          {/* Second Image */}
          <div className="w-[48%] shadow-lg h-[400px]">
            <img
              src="https://cdn.pk.emaar.com/wp-content/uploads/2023/09/Dusk-Close-1620x832.jpg"
              className="w-full h-full object-cover"
              alt="Other Image"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Renthome;
