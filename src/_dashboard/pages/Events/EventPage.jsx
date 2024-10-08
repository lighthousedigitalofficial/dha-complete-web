import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetEventByIdQuery } from "../../../redux/slices/eventsApiSlice";

const EventPage = () => {
  const { id } = useParams();
  const { data: event, isLoading, error } = useGetEventByIdQuery(id);
  const [eventData, setEventData] = useState(null);

  useEffect(() => {
    if (event) {
      setEventData(event);
    }
  }, [event]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading event details</div>;
  }

  if (!eventData) {
    return <div>No event data available</div>;
  }

  return (
    <div className="p-4 rounded-md shadow-md m-5">
      <h2 className="text-2xl font-semibold mb-6">{eventData.title}</h2>
      <p className="text-lg mb-4">{eventData.description}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {eventData.images && eventData.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Event Image ${index + 1}`}
            className="w-full h-auto rounded-md shadow-md"
          />
        ))}
      </div>
    </div>
  );
};

export default EventPage;