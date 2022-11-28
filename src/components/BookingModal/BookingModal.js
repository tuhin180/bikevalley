import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../Context/AuthProvider";

const BookingModal = ({ bookingProduct, setBookingProduct }) => {
  const { _id, name, resale_price, img } = bookingProduct;
  const { user } = useContext(AuthContext);

  const handleBooking = (e) => {
    e.preventDefault();
    const form = e.target;
    const userName = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const price = form.price.value;
    const location = form.location.value;

    const bookingItem = {
      productName: name,
      byerName: userName,
      productId: _id,
      email,
      phone,
      price,
      location,
      img,
    };
    // console.log(bookingItem);
    fetch(`${process.env.REACT_APP_API_URL}/booking`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookingItem),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          setBookingProduct(null);
          toast.success("booking succeed..");
        } else {
          toast.error(data.message);
        }
      });
  };
  return (
    <>
      <input type="checkbox" id="Booking-Modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="Booking-Modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-3 mt-10"
          >
            <input
              type="text"
              name="name"
              value={user.displayName}
              disabled
              className="input input-bordered input-primary w-full "
            />
            <input
              type="text"
              name="email"
              value={user.email}
              disabled
              className="input input-bordered input-primary w-full "
            />
            <input
              type="text"
              name="price"
              value={resale_price}
              disabled
              className="input input-bordered input-primary w-full "
            />
            <input
              name="phone"
              type="phone"
              placeholder="Phone Number"
              className="input input-bordered input-primary w-full "
              required
            />
            <input
              name="location"
              type="text"
              placeholder="Meeting Location"
              className="input input-bordered input-primary w-full "
              required
            />

            <br />
            <input
              className=" btn btn-accent w-full "
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
