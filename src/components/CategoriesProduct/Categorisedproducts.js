import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import AdvertisedItems from "../AdvertisedItem/AdvertisedItems";
import BookingModal from "../BookingModal/BookingModal";
import Categoriseditem from "./Categoriseditem";

const Categorisedproducts = () => {
  const products = useLoaderData();

  const [bookingProduct, setBookingProduct] = useState(null);

  return (
    <div className="mt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  items-center">
        {[
          products.map((product) => (
            <Categoriseditem
              key={product._id}
              product={product}
              setBookingProduct={setBookingProduct}
            ></Categoriseditem>
          )),
        ]}
      </div>
      {bookingProduct && (
        <BookingModal
          bookingProduct={bookingProduct}
          setBookingProduct={setBookingProduct}
        ></BookingModal>
      )}
    </div>
  );
};

export default Categorisedproducts;
