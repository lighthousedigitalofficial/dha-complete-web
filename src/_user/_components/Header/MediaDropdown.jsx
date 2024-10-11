import React from "react";
import { useGetMediaQuery } from "../../_root/redux/slices/mediaApiSlice";

const MediaDropDown = () => {
  const { data: mediaData, error, isLoading } = useGetMediaQuery();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading media data</p>;

  console.log("Media Data:", mediaData);

  return (
    <div>
      <label>Media</label>
      <ul>
        <li>
          <a href="/media/advertisement">Advertisement</a>
        </li>
        <li>
          <a href="#">Videos</a>
          <ul>
            <li>
              <a href="/media/videos/dha-mobile-app">DHA Mobile App</a>
            </li>
            <li>
              <a href="/media/public-service-message">Public Service Message</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">Event & Activities</a>
          <ul>
            {/* Dynamically populate media data */}
            {mediaData?.doc?.map((media) => (
              <li key={media._id}>
                <a href={`/media/events/${media.slug}`}>
                  {media.bannerId?.title || media.title}
                </a>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default MediaDropDown;
