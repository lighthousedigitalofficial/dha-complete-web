import React, { useRef } from 'react';

const CarouselWithNav = () => {
  const cards = [
    { id: 1, title: 'Card 1', content: 'Some content for card 1.' },
    { id: 2, title: 'Card 2', content: 'Some content for card 2.' },
    { id: 3, title: 'Card 3', content: 'Some content for card 3.' },
    { id: 4, title: 'Card 4', content: 'Some content for card 4.' },
    { id: 5, title: 'Card 5', content: 'Some content for card 5.' },
  ];

  const carouselRef = useRef(null);

  const scrollLeft = () => {
    carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <div className="relative w-full">
      <button
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg"
      >
        &larr;
      </button>
      <div
        ref={carouselRef}
        className="flex justify-center items-center space-x-6 overflow-x-scroll py-8"
      >
        {cards.map((card) => (
          <div
            key={card.id}
            className="bg-gradient-to-b from-gray-700 to-gray-800 p-4 rounded-xl w-96 shadow-lg transform transition-transform duration-300 hover:scale-105 hover:rotate-3 hover:shadow-2xl"
          >
            <div className="h-32 bg-gray-600 rounded-lg"></div>
            <div className="mt-4">
              <h2 className="text-xl text-lime-400">{card.title}</h2>
              <p className="text-gray-300 mt-2">{card.content}</p>
            </div>
            <button className="bg-gray-900 text-lime-400 px-4 py-2 rounded-lg mt-4 w-full hover:bg-lime-400 hover:text-gray-900">
              Read More
            </button>
          </div>
        ))}
      </div>
      <button
        onClick={scrollRight}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg"
      >
        &rarr;
      </button>
    </div>
  );
};

export default CarouselWithNav;
