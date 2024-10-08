

import React from 'react';

// Consultant Component
const Consultant = ({ imageUrl, name, title }) => {
  return (
    <div className='w-full md:w-1/3 text-center'>
      <img 
        src={imageUrl} 
        className='w-full' 
        alt={name}
      />
      <p className='mt-2 text-xl font-semibold'>{name}</p>
      <p className='text-lg'>{title}</p>
    </div>
  );
};

// Ourconsultantans Component
const Ourconsultantans = () => {
  // Data for consultants
  const consultants = [
    {
      imageUrl: "https://cdn.shopify.com/s/files/1/0707/0895/3393/files/1_262955ca-0b45-49e9-9ad1-1103cc83761b.png?v=1721729103",
      name: "Ahsan Sohail",
      title: "Senior Investment Consultant"
    },
    {
      imageUrl: "https://cdn.shopify.com/s/files/1/0707/0895/3393/files/2_ae03d445-eb5e-4c02-84e5-7d0423db4449.png?v=1721729103",
      name: "Shakeel Raja",
      title: "Senior Investment Consultant"
    },
    {
      imageUrl: "https://cdn.shopify.com/s/files/1/0707/0895/3393/files/VIC_Males.png?v=1721731832",
      name: "John Doe",
      title: "Senior Investment Consultant"
    }
  ];

  return (
    <>
      <div className='text-center  p-6 mt-6'>
        <p className='text-4xl font-bold text-black'>OUR CONSULTANTS</p>
        <div className='p-5 mt-4 flex flex-col md:flex-row gap-4 shadow-lg justify-center'>
          {consultants.map((consultant, index) => (
            <Consultant 
              key={index}
              imageUrl={consultant.imageUrl}
              name={consultant.name}
              title={consultant.title}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Ourconsultantans;
