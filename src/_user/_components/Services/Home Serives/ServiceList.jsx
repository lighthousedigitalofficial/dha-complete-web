import React from "react";
import ServicesCard from "./ServicesCard";
import { motion } from "framer-motion";

const ServiceList = ({ services }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <ServicesCard
            imageSrc={service.imageSrc}
            serviceName={service.serviceName}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default ServiceList;