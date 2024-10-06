const BlogCard = ({ imageUrl, title, description }) => {
  return (
    <div className=" bg-white   overflow-hidden h-90 w-full">
      <img
        className="w-full h-48 object-cover hover:opacity-80"
        src={imageUrl}
        alt={title}
      />
      <div className="">
        <h2 className="text-lg font-semibold hover:text-golden">{title}</h2>
        <p className="text-gray-600 mt-2 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default BlogCard;
