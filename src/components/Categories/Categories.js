import { useQuery } from "@tanstack/react-query";
import React from "react";
import Spinner from "../Spinner/Spinner";
import CategoriesItem from "./CategoriesItem";

const Categories = () => {
  const url = `${process.env.REACT_APP_API_URL}/categories`;
  const {
    isLoading,
    error,
    data: categories,
  } = useQuery({
    queryKey: ["category"],
    queryFn: () => fetch(url).then((res) => res.json()),
  });

  if (isLoading) return <Spinner></Spinner>;

  if (error) return "An error has occurred: " + error.message;
  return (
    <div>
      <h1 className="text-center text-primary text-2xl">Our categories </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {categories.map((category) => (
          <CategoriesItem
            key={category._id}
            category={category}
          ></CategoriesItem>
        ))}
      </div>
    </div>
  );
};

export default Categories;
