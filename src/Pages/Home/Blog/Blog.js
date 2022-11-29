import React from "react";
import img1 from "../../../assets/images/useState-hook.png";
import img2 from "../../../assets/images/prototypical.png";
import img3 from "../../../assets/images/unit_testing.jpg";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div>
      <h1 className="text-3xl text-center m-10">Our blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Link to="/blog/state" className="block shadow-lg rounded-md p-4">
          <img
            alt="Signage"
            src={img1}
            className="h-56 w-full rounded-bl-3xl rounded-tr-3xl object-cover sm:h-72"
          />

          <div className="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
            <strong className="font-medium mt-4">
              What are the different ways to manage Link state in Link react
              application?
            </strong>
          </div>
        </Link>

        <Link
          to="/blog/prototypical"
          className="block shadow-lg rounded-md p-4"
        >
          <img
            alt="Signage"
            src={img2}
            className="h-56 w-full rounded-bl-3xl rounded-tr-3xl object-cover sm:h-72"
          />

          <div className="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
            <strong className="font-medium mt-4">
              How does prototypical inheritance work?
            </strong>
          </div>
        </Link>

        <Link to="/blog/unittest" className="block shadow-lg rounded-md p-4">
          <img
            alt="Signage"
            src={img3}
            className="h-56 w-full rounded-bl-3xl rounded-tr-3xl object-cover sm:h-72"
          />

          <div className="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
            <strong className="font-medium mt-4">
              What is unit test? why we should write unit test?
            </strong>
          </div>
        </Link>

        <Link to="/blog/vs" className="block shadow-lg rounded-md p-4">
          <img
            alt="Signage"
            src={img3}
            className="h-56 w-full rounded-bl-3xl rounded-tr-3xl object-cover sm:h-72"
          />

          <div className="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
            <strong className="font-medium mt-4">
              React vs angular vs vue
            </strong>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Blog;
