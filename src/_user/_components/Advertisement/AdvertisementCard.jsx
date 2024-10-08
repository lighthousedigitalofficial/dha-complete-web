import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import 'aos/dist/aos.css';
import AOS from 'aos';

const AdvertisementCard = ({ imageUrl, title }) => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="w-full rounded overflow-hidden" data-aos="fade-up">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-center text-cream">{title}</div>
      </div>
      <img className="w-full" src={imageUrl} alt={title} />
    </div>
  );
};

AdvertisementCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default AdvertisementCard;