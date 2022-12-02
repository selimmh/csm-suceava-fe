import React from "react";

const PageLabel = ({ label, description }) => {
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold">{label}</h1>
      <h3 className="text-gray-600 max-w-xs">{description}</h3>
    </div>
  );
};

export default PageLabel;
