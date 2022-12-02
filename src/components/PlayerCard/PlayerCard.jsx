import React from "react";

const PlayerCard = ({
  image,
  fullName,
  nationality,
  position,
  birthDate,
  height,
}) => {
  return (
    <div className="flex border p-4 shadow-lg rounded-md w-full h-60 hover:shadow-xl transition-all duration-300">
      <img
        className="w-32 h-48 object-cover mr-8 border"
        src={image}
        alt={fullName}
      />
      <div className="flex flex-col justify-between">
        <div>
          <span className="font-bold text-sm">Nume: </span>
          {fullName}
        </div>
        <div>
          <span className="font-bold text-sm">Nationalitate: </span>
          {nationality}
        </div>
        <div>
          <span className="font-bold text-sm">Post: </span>
          {position}
        </div>
        <div>
          <span className="font-bold text-sm">Varsta: </span>
          {birthDate}
        </div>
        <div>
          <span className="font-bold text-sm">Inaltime: </span>
          {height}
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
