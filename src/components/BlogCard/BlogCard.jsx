import React from "react";

const BlogCard = ({
  long_title,
  content,
  image_url,
  created_at,
  created_by,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className="rounded-md shadow-lg flex w-full border overflow-hidden h-64 cursor-pointer hover:shadow-xl transition-all duration-300"
    >
      <img src={image_url} alt="" className="h-full" />
      <div className="flex flex-col p-8">
        <div className="text-2xl font-bold mb-4">{long_title}</div>
        <div className="h-20">{content?.slice(0, 300)}</div>

        {/* creator */}
        <div className="flex flex-col items-end mt-10 text-sm text-gray-500">
          <div>{created_at}</div>
          <div>{created_by}</div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
