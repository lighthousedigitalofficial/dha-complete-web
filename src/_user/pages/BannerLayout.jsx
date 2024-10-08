// Layout.jsx
import React from 'react';
import { useGetBannersQuery } from '../redux/slices/bannersApiSlice'; 
import HeroSectionWithHeading from '../../components/Share/HeroScetionWithHeading';

const Layout = ({ children }) => {
  const { data, isLoading, error } = useGetBannersQuery();

  if (isLoading) {
    return <p>Loading...</p>;
  }
  
  if (error) {
    return <p>Error loading banners: {error.message || "An unknown error occurred"}</p>;
  }

  const banners = data?.doc || [];
  const featuredBanner = banners.length > 0 ? banners[0] : null;

  let backgroundMedia = {};

  if (featuredBanner?.type === 'image') {
    backgroundMedia = { backgroundImage: featuredBanner.mediaUrl };
  } else if (featuredBanner?.type === 'video') {
    backgroundMedia = { backgroundVideo: featuredBanner.mediaUrl };
  } else {
    backgroundMedia = { backgroundImage: '/Utils/banner.jpg' }; 
  }

  return (
    <div>
      <HeroSectionWithHeading
        backgroundVideo={backgroundMedia.backgroundVideo}
        backgroundImage={backgroundMedia.backgroundImage}
        heading={featuredBanner?.title || 'Welcome to DHA'}
        description={featuredBanner?.description || 'Explore our latest offerings and community events.'}
      />
      {children} 
    </div>
  );
};

export default Layout;
