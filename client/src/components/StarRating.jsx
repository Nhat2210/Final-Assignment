import React from "react";
import { assets } from "../assets/assets";

const StarRating = (props) => {
  const rating = props.rating || 4;

  return (
    <div className="flex items-center gap-1 mt-4">
      {Array(5)
        .fill("")
        .map((_, index) => (
          <img
            key={index}
            src={
              rating > index ? assets.starIconFilled : assets.starIconOutlined
            }
            alt="star-icon"
            className="w-4.5 h-4.5"
          />
        ))}
    </div>
  );
};

export default StarRating;
