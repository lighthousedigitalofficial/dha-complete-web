import React from 'react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { BsTwitterX } from 'react-icons/bs';
import logo from '../../assets/Images/dhalogo.png'; // Adjust the path to your logo

const Footer = () => {
  const links = [
    "FAQs",
    "Facilities",
    "Resident Email Info",
    "Contact",
    "Career Opportunities",
  ];

  return (
    <footer className="bg-primarydark text-cream">
      <div className="flex flex-col md:flex-row gap-4 w-[80%] mx-auto py-6">
        {/* Column 1: Address and Contact Info */}
        <div className="flex flex-col md:w-3/4 items-center justify-center text-center">
          <img
            src={logo}
            alt="logo"
            className="object-cover rounded-full pb-5 h-24 md:h-36"
          />
          <p className="text-[1rem] md:w-2/3">
            Defence Housing Authority Islamabad-Rawalpindi Phase-I, Defence
            Mall, Defence Avenue Islamabad-Rawalpindi-44000 Pakistan
          </p>
          <div className="flex flex-col md:flex-row text-[.8rem] gap-4 mt-4">
            <p>+92-51-111-555-400</p>
            <p>info@dhai-r.com.pk</p>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="flex flex-col md:w-1/4 items-center md:items-start">
          <h3 className="text-center text-[1.2rem] font-bold mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 ">
            {links.map((link, index) => (
              <li key={index} className="text-[.8rem] md:text-[1rem]">
                <a href="#" className="hover:text-gray-300">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Site Links */}
        <div className="flex flex-col md:w-1/4 items-center md:items-start">
          <h3 className="text-[1rem] md:text-[1.2rem] font-bold mb-4">
            Site Links
          </h3>
          <ul className="space-y-2">
            <li className="text-[.8rem] md:text-[1rem]">
              <a href="/">Call Us:</a>
              <h1>+92-51-111-555-400</h1>
            </li>
            <li className="text-[.8rem] md:text-[1rem]">
              <a href="/">Send an Email:</a>
              <h1>info@dhai-r.com.pk</h1>
            </li>
            <li className="text-[.8rem] md:text-[1rem]">
              <a href="/">Release Date: 01 Jan, 2020 Ver: 1.4</a>
              <h1 className="flex  text-[1.6rem] gap-4 mt-2">
                <FaFacebookF className="text-blue-600" />
                <BsTwitterX className="text-black" />
                <FaInstagram className="text-red-200" />
              </h1>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;