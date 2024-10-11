import React from 'react';
import { useGetAssociateWebsitesQuery } from '../../_root/redux/slices/associateWebsitesSlice';

export const AssociateWebsites = () => {
  const { data, isLoading, isError } = useGetAssociateWebsitesQuery();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading websites: {isError.message}</div>;

  const websites = data?.doc || [];

  if (!Array.isArray(websites) || websites.length === 0) {
    return <div>No websites available.</div>; 
  }

  return (
    <div>
      <div className="promo promo-light promo-full uppercase footer-stick mt-1" id="associatestop">
        <div className="container mx-auto text-center">
          <h3 className="tracking-wider">Associates Websites</h3>
        </div>
      </div>

      <div className="container mx-auto mt-24 w-11/12 flex flex-col items-center justify-center">
        <div className="flex flex-wrap justify-center">
          {websites.map((website) => (
            <div key={website._id} className="mb-6 mx-6"> 
              <a href={website.link} target="_blank" rel="noopener noreferrer">
                <img
                  className="image_fade rounded-full h-28 w-28 object-cover"
                  src={website.logo}
                  alt={website.name}
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
