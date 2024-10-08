


// import React from "react";

// import Card from "./Card";

// const Vmccard = () => {
//   return (
//     <div className="relative flex flex-col items-center justify-center min-h-screen py-10">
//       {/* Background image */}
//       <img
//         src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/287334562.jpg?k=5911dabb15e2c9c118e83aa7ae55379ebccb5761391c911feb253c2178992f01&o=&hp=1"
//         alt="Hero"
//         className="absolute inset-0 w-full h-full object-cover bg-brand bg-opacity-90 opacity-40"
//       />

//       {/* Logo image */}
//       <img
//         src="https://seeklogo.com/images/D/dha-housing-authority-islamabad-rawalpindi-logo-947424CCB5-seeklogo.com.png"
//         alt="Logo"
//         className="relative w-36 h-36 object-contain z-10 mt-10"
//       />

//       <Card/>
//     </div>
//   );
// };

// export default Vmccard;

import React from "react";
import Card from "./Card";

const Vmccard = () => {
  return (

    <div className="relative flex flex-col items-center justify-center min-h-screen py-10 bg-gray-800">
        
      {/* Background image */}
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/287334562.jpg?k=5911dabb15e2c9c118e83aa7ae55379ebccb5761391c911feb253c2178992f01&o=&hp=1"
        alt="Hero"
        className="absolute inset-0 w-[80%] h-[95%] m-auto object-cover bg-brand bg-opacity-90 opacity-40"
      />

      {/* Logo image */}
      <img
        src="https://seeklogo.com/images/D/dha-housing-authority-islamabad-rawalpindi-logo-947424CCB5-seeklogo.com.png"
        alt="Logo"
        className="relative w-36 h-36 object-contain z-10 mt-10"
      />

      <Card />
    </div>
  );
};

export default Vmccard;
