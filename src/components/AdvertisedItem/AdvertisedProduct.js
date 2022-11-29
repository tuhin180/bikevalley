import { useQuery } from "@tanstack/react-query";
import React from "react";
import Spinner from "../Spinner/Spinner";
import AdvertisedItems from "./AdvertisedItems";

const AdvertisedProduct = () => {
  const {
    isLoading,
    error,
    data: Advertised,
  } = useQuery({
    queryKey: ["Advertised"],
    queryFn: () =>
      fetch(`${process.env.REACT_APP_API_URL}/advertisedItem`).then((res) =>
        res.json()
      ),
  });

  if (isLoading) return <Spinner></Spinner>;

  if (error) return "An error has occurred: " + error.message;
  return (
    <div>
      {Advertised && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12 p-12 ">
            {Advertised.map((item) => (
              <AdvertisedItems key={item._id} item={item}></AdvertisedItems>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default AdvertisedProduct;
