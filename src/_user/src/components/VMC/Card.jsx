import React from 'react'
import { FaHandsHelping, FaBuilding, FaShieldAlt } from 'react-icons/fa';

const Card = () => {
  return (
    
    <div className="relative flex flex-col sm:flex-row justify-center items-center w-full space-y-6 sm:space-y-0 sm:space-x-8 z-10 mt-20 sm:mt-32">
        {/* Card 1 */}
        <div className="relative flex flex-col items-center rounded-[30px] bg-[#F0DDB6] w-80 h-96 p-4 shadow-lg">
          {/* Icon at the top */}
          <FaHandsHelping className="absolute -top-14 text-4xl bg-brand rounded-full w-28 h-28 text-white mb-2" />
          <div className="mt-10">
            <h1 className="text-center text-2xl font-bold">
              Professional Oversight and Support
            </h1>
            <p className="absolute -bottom-8 text-brand text-center w-72 h-72 text-2xl bg-[#CDB682] rounded-[30px] p-2">
              Our dedicated Tenant Coordination Team is here to make your move seamless, handling everything from the first meeting to the final inspection.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative flex flex-col items-center rounded-[30px] bg-[#F0DDB6] w-80 h-96 p-4 shadow-lg">
          {/* Icon at the top */}
          <div className="absolute -top-14 flex items-center justify-center bg-brand rounded-full w-28 h-28 text-white mb-2">
            <FaBuilding className="w-20 h-20" />
          </div>
          <div className="mt-10">
            <h1 className="text-center text-2xl font-bold">
              Comprehensive Property Management
            </h1>
            <p className="absolute -bottom-8 text-brand text-center w-72 h-72 text-2xl bg-[#CDB682] rounded-[30px] p-2">
              We provide full-service property management to ensure your property is always well-maintained and fully compliant with regulations.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="relative flex flex-col items-center rounded-[30px] bg-[#F0DDB6] w-80 h-96 p-4 shadow-lg">
          {/* Icon at the top */}
          <div className="absolute -top-14 flex items-center justify-center bg-brand rounded-full w-28 h-28 text-white mb-2">
            <FaShieldAlt className="w-20 h-20" />
          </div>
          <div className="mt-10">
            <h1 className="text-center text-2xl font-bold">
              Advanced Security and Safety
            </h1>
            <p className="absolute -bottom-8 text-brand text-center w-72 h-72 text-2xl bg-[#CDB682] rounded-[30px] p-2">
              Our state-of-the-art security systems ensure your property is safe and protected 24/7 with advanced monitoring and control.
            </p>
          </div>
        </div>
      </div>
  )
}

export default Card
