import React from "react";
import { Link } from "react-router-dom";

const AdvertisedItems = ({ item }) => {
  const {
    name,
    seller_name,
    resale_price,
    original_price,
    location,
    time_of_post,
    description,
    img,
  } = item;
  return (
    <div>
      <div className="max-w-2xl mx-auto">
        <div className="bg-white shadow-md rounded-lg max-w-sm bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br">
          <Link href="#">
            <img className="p-4 rounded-lg" src={img} alt="" />
          </Link>
          <div className="px-5 pb-5 mb-3">
            <Link href="#">
              <h3 className="text-gray-900 font-semibold text-xl tracking-tight dark:text-white">
                {name}
              </h3>
            </Link>

            <div className="flex items-center justify-between">
              <span className="  font-bold text-gray-900 dark:text-white">
                Original Price: {original_price}
              </span>

              <span className="  font-bold text-gray-900 dark:text-white">
                Resale Price: {resale_price}
              </span>
            </div>
            <hr className="m-2" />
            <div className="flex items-center justify-between">
              <span className="  font-bold text-gray-900 dark:text-white">
                Location : {location}
              </span>

              <span className=" text-xs  font-bold text-gray-900 dark:text-white">
                seller: {seller_name}
              </span>
            </div>
            <hr className="m-2" />
            <div className="flex items-center justify-between">
              <span className=" text-sm font-bold text-gray-900 dark:text-white">
                Post time: {time_of_post}
              </span>
            </div>
            <p className="text-white font-bold">
              About: <span>{description}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvertisedItems;
