import React from "react";
import { useLoaderData } from "react-router-dom";
import Categoriseditem from "./Categoriseditem";

const Categorisedproducts = () => {
  const products = useLoaderData();

  return (
    <div className="mt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  items-center">
        {[
          products.map((product) => (
            <Categoriseditem
              key={product._id}
              product={product}
            ></Categoriseditem>
          )),
        ]}
      </div>
    </div>
  );
};

export default Categorisedproducts;
