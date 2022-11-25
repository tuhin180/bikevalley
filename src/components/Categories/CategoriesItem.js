import React from "react";
import { Link } from "react-router-dom";

const CategoriesItem = ({ category }) => {
  const { _id, name, img, descripton } = category;
  return (
    <div>
      <Link href="#" className="group block overflow-hidden shadow-md p-4">
        <img
          alt="Tee"
          src={img}
          className="h-[350px] w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-[450px] rounded"
        />

        <div className="relative bg-white pt-4">
          <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
            {name}
          </h3>

          <p className="mt-2">
            <span className="tracking-wider"> {descripton.slice(0, 50)}..</span>
          </p>
        </div>
      </Link>
    </div>
  );
};

export default CategoriesItem;
