import React from "react";
import { Link } from "react-router-dom";

const Categoriseditem = ({ product }) => {
  console.log(product);
  const {
    category_name,
    description,
    img,
    location,
    name,
    original_price,
    resale_price,
    seller_name,
    time_of_post,
    years_of_use,
  } = product;
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

              <span className=" text-sm  font-bold text-gray-900 dark:text-white">
                years_of_use: {years_of_use}
              </span>
            </div>

            {/* <Link
              href="#"
              className=" w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Book Now
            </Link> */}
            <button className="mt-4 w-full bg-white rounded-lg py-3">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categoriseditem;
