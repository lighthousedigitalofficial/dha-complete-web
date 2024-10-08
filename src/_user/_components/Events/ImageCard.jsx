import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

const ImageCard = ({ image, title, description }) => {
  return (
    <motion.div
      className="m-4"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Tilt className="Tilt" tiltMaxAngleX={25} tiltMaxAngleY={25} scale={1.05}>
        <div className="Tilt-inner bg-golden rounded-lg shadow-lg overflow-hidden">
          <img src={image} alt={title} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-2xl font-bold text-white">{title}</h3>
            <p className="text-sm text-white mt-2">{description}</p>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

export default ImageCard;