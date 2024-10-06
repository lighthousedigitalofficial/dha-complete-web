// import React from 'react'

// const ImagesforVic = () => {
//   return (
//     <>
//     <div className='flex flex-col items-center justify-center p-5'>
//         <img src="https://theleadmarketing.com/wp-content/uploads/2023/02/DHA-Phase-1-Islamabad.jpg" className='w-full p-5'/>
//         <img src="https://i1.wp.com/manahilestate.com/wp-content/uploads/2022/08/DHA-Phase-1-Islamabad.jpeg?fit=1280%2C719&ssl=1" className='w-full p-5'/>
//         <img src="https://makaansolutions.com/wp-content/uploads/2022/07/DHA-Islamabad-Rawalpindi-Phase-9-1024x677.webp" className='w-full p-5'/>
      
//     </div>
//     </>
//   )
// }

// export default ImagesforVic


import React from 'react';

// ImagesforVic Component
const ImagesforVic = ({ images }) => {
  return (
    <div className='flex flex-col items-center justify-center p-5 space-y-5'>
      {images.map((imageUrl, index) => (
        <img 
          key={index}
          src={imageUrl} 
          className='w-full lg:w-full md:w-3/4 p-5 object-cover'
          alt={`Image ${index + 1}`}
        />
      ))}
    </div>
  );
}

// Example Usage within the same file
const App = () => {
  const imageUrls = [
    "https://theleadmarketing.com/wp-content/uploads/2023/02/DHA-Phase-1-Islamabad.jpg",
    "https://i1.wp.com/manahilestate.com/wp-content/uploads/2022/08/DHA-Phase-1-Islamabad.jpeg?fit=1280%2C719&ssl=1",
    "https://makaansolutions.com/wp-content/uploads/2022/07/DHA-Islamabad-Rawalpindi-Phase-9-1024x677.webp"
  ];

  return (
    <div>
      <ImagesforVic images={imageUrls} />
    </div>
  );
}

export default App;
