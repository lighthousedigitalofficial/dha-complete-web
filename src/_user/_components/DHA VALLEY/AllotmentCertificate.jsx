import React from 'react'
import { FaCloudDownloadAlt } from "react-icons/fa";
const AllotmentCertificate = () => {
  return (
    <div className="bg-golden h-[100vh] p-8">
      <div className="p-4 flex justify-center mt-4  space-x-4">
        {" "}
        
        <div className="border shadow-lg p-4 rounded-large w-[40vw]">
          {" "}
          {/* Adjusted width */}
          <h3 className="text-2xl font-bold ">Procedure:</h3>
          <div className="flex justify-between items-center mt-2">
            <a href="#" className="text-white text-xl">
              File Opening Procedure
            </a>
            <FaCloudDownloadAlt className="text-blue-500 text-2xl" />
          </div>
        </div>
        {/* Document Section */}
        <div className="border shadow-lg rounded-large p-4 w-[40vw]">
          {" "}
          {/* Adjusted width */}
          <h3 className="text-2xl font-bold">Document:</h3>
          <ul className="mt-2 space-y-2">
            <li className="flex justify-between items-center">
              <a href="#" className="text-white text-xl">
                1- REQUEST FOR ISSUANCE OF OPEN ALLOTMENT CERTIFICATE
              </a>
              <FaCloudDownloadAlt className="text-blue-500 text-2xl" />
            </li>
            
          </ul>
        </div>
      </div>
    </div>
  )
}

export default AllotmentCertificate
