import React, { useState } from "react";
import { FiX } from "react-icons/fi";

const AddService = () => {
  const [service, setService] = useState("");
  const [servicesList, setServicesList] = useState([]);

  // Handle adding a service
  const addService = (e) => {
    e.preventDefault();
    if (service.trim() !== "") {
      setServicesList([...servicesList, service.trim()]);
      setService(""); // Clear the input after adding
    }
  };

  // Handle removing a service
  const removeService = (indexToRemove) => {
    setServicesList(servicesList.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="service-container">
      <form onSubmit={addService}>
        <input
          type="text"
          value={service}
          onChange={(e) => setService(e.target.value)}
          placeholder="Enter a service"
        />
        <button type="submit">Add Service</button>
      </form>

      {servicesList.length > 0 && (
        <ul className="service-list">
          {servicesList.map((service, index) => (
            <li key={index} className="service-item">
              {service}
              <FiX
                className="remove-icon"
                onClick={() => removeService(index)}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AddService;