

import React from 'react';

const ContectUs = () => {
  return (
    <>
      <div className="bg-golden h-[100vh] ">
        <div className="p-4  text-center">
          <h2 className="text-4xl mt-10 text-orange-500 font-semibold">Contact Our Team</h2>
          <p className="text-2xl mt-4 text-white">UAN: +92-51-111-555-400</p>
        </div>
        <div className="p-4 flex text-white text-xl justify-center items-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl mx-auto">
            {/* Card 1 */}
            <div className="border rounded-lg  p-4">
              <p className="text-xl text-white font-semibold">Name: Faizan Ahmed</p>
              <p className='text-xl text-white'>Designation: Marketing & Sales Executive</p>
              <p className='text-white text-xl'>Extn: 1258</p>
            </div>
            {/* Card 2 */}
            <div className="border rounded-lg p-4">
              <p className="text-lg font-semibold">Name: Shafaat Sadiq</p>
              <p>Designation: Sales Executive</p>
              <p>Extn: 1381</p>
            </div>
            {/* Card 3 */}
            <div className="border rounded-lg p-4">
              <p className="text-lg font-semibold">Name: Mudassar Naseer</p>
              <p>Designation: Property Exchange Executive</p>
              <p>Extn: 1244</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContectUs;
