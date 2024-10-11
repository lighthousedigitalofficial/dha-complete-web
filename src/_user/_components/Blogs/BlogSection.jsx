import React, { useState } from "react";
import BlogCard from "./BlogCard";

const BlogSection = () => {
  const blogPosts = [
    {
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjv-Q6UZbaiKqRXHD39fQ7zkTObWNEshswXw&s", // Replace with actual image URLs
      title:
        "Discover Prime Offices for Sale in Lahore: 2024 Real Estate Guide",
      description:
        "In the quest for the perfect office space solution, today's consumers embark on a stressful journey with challenges and uncertainties...",
    },
    {
      imageUrl: "https://content-cdn.zameen.com/DHA_Islamabad_3edf0d2161.jpg",
      title:
        "Discover Prime Offices for Sale in Lahore: 2024 Real Estate Guide",
      description:
        "In the quest for the perfect office space solution, today's consumers embark on a stressful journey with challenges and uncertainties...",
    },
    {
      imageUrl:
        "https://makaansolutions.com/wp-content/uploads/2022/07/DHA-Islamabad-Rawalpindi-Phase-9.webp",
      title:
        "Discover Prime Offices for Sale in Lahore: 2024 Real Estate Guide",
      description:
        "Lahore, the heart of Pakistan's Punjab province, is not only a city rich in cultural heritage but also a burgeoning hub for business and commerce...",
    },
    {
      imageUrl:
        "https://alsadatmarketing.com/wp-content/uploads/2023/09/dha-homes-islamabad-al-sadat-marketing-jpg.webp", // Replace with actual image URLs
      title:
        "Discover Prime Offices for Sale in Lahore: 2024 Real Estate Guide",
      description:
        "In the quest for the perfect office space solution, today's consumers embark on a stressful journey with challenges and uncertainties...",
    },
    {
      imageUrl:
        "https://alsadatmarketing.com/wp-content/uploads/2023/05/dha-homes-islamabad-al-sadat-marketing-real-estate-agency-in-blue-area-islamabad-pakistan-2-1024x536.webp",
      title: "Why Choose The Vertical for Office Space in Lahore",
      description:
        "In the quest for the perfect office space solution, today's consumers embark on a stressful journey with challenges and uncertainties...",
    },
    {
      imageUrl:
        "https://thevertical.pk/cdn/shop/articles/Is_Vertical_the_Future_of_Corporate_Offices_450x225_crop_center.png?v=1720208728",
      title:
        "Discover Prime Offices for Sale in Lahore: 2024 Real Estate Guide",
      description:
        "Lahore, the heart of Pakistan's Punjab province, is not only a city rich in cultural heritage but also a burgeoning hub for business and commerce...",
    },
    {
      imageUrl: "https://via.placeholder.com/300", // Replace with actual image URLs
      title:
        "Discover Prime Offices for Sale in Lahore: 2024 Real Estate Guide",
      description:
        "The Vertical aims to redefine architectural excellence. With a foundation built on creativity, quality, and unmatched dedication...",
    },
    {
      imageUrl: "https://via.placeholder.com/300",
      title: "Why Choose The Vertical for Office Space in Lahore",
      description:
        "In the quest for the perfect office space solution, today's consumers embark on a stressful journey with challenges and uncertainties...",
    },
    {
      imageUrl: "https://via.placeholder.com/300",
      title: "Discover Prime  in Lahore: 2024 Real Estate Guide",
      description:
        "Lahore, the heart of Pakistan's Punjab province, is not only a city rich in cultural heritage but also a burgeoning hub for business and commerce...",
    },
    {
      imageUrl: "https://via.placeholder.com/300", // Replace with actual image URLs
      title:
        "Discover Prime Offices for Sale in Lahore: 2024 Real Estate Guide",
      description:
        "The Vertical aims to redefine architectural excellence. With a foundation built on creativity, quality, and unmatched dedication...",
    },
    {
      imageUrl: "https://via.placeholder.com/300",
      title: "Why Choose The Vertical for Office Space in Lahore",
      description:
        "In the quest for the perfect office space solution, today's consumers embark on a stressful journey with challenges and uncertainties...",
    },
    {
      imageUrl: "https://via.placeholder.com/300",
      title:
        "Discover Prime Offices for Sale in Lahore: 2024 Real Estate Guide",
      description:
        "Lahore, the heart of Pakistan's Punjab province, is not only a city rich in cultural heritage but also a burgeoning hub for business and commerce...",
    },
    // Add more items if needed
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 3;

  // Get current posts
  const indexOfLastPost = currentPage * cardsPerPage;
  const indexOfFirstPost = indexOfLastPost - cardsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

  // Logic for displaying page numbers
  const totalPages = Math.ceil(blogPosts.length / cardsPerPage);

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <section className="p-5">
      <h1 className="text-[1rem] md:text-[1.5rem] font-bold text-center mb-4">
        Blog
      </h1>
      <div className="grid grid-cols-1 justify-center items-center md:grid-cols-3 gap-4 ">
        {currentPosts.map((post, index) => (
          <BlogCard
            key={index}
            imageUrl={post.imageUrl}
            title={post.title}
            description={post.description}
          />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8">
        <nav aria-label="Pagination">
          <ul className="inline-flex items-center space-x-1">
            <li>
              <button
                onClick={handlePrevious}
                disabled={currentPage === 1}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md"
              >
                &lt;
              </button>
            </li>
            {[...Array(totalPages)].map((_, pageIndex) => (
              <li key={pageIndex}>
                <button
                  onClick={() => handlePageClick(pageIndex + 1)}
                  className={`px-4 py-2 border ${
                    currentPage === pageIndex + 1
                      ? "bg-gray-300"
                      : "bg-white border-gray-300"
                  } rounded-md`}
                >
                  {pageIndex + 1}
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={handleNext}
                disabled={currentPage === totalPages}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md"
              >
                &gt;
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default BlogSection;
