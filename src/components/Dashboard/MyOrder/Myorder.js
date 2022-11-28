import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";
import Spinner from "../../Spinner/Spinner";

const Myorder = () => {
  const { user } = useContext(AuthContext);

  const {
    isLoading,
    error,
    data: bookings,
  } = useQuery({
    queryKey: ["booking"],
    queryFn: () =>
      fetch(`${process.env.REACT_APP_API_URL}/booking?email=${user.email}`, {
        headers: {
          authorization: `bearer ${localStorage.getItem("bikevalley-token")}`,
        },
      }).then((res) => res.json()),
  });

  if (isLoading) return <Spinner />;

  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      <h1 className="text-3xl mb-3">My Order</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Product</th>
              <th>Price</th>
              <th>location</th>
              <th>phn</th>
              <th>img</th>
              <th>payment</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, i) => (
              <tr key={i}>
                <th>{i + 1}</th>
                <td>{booking.byerName}</td>
                <td>{booking.productName}</td>
                <td>{booking.price}</td>
                <td>{booking.location}</td>
                <td>{booking.phone}</td>
                <td>
                  <img className="w-16 rounded-full" src={booking.img} alt="" />
                </td>
                <td>
                  {!booking.paid && (
                    <Link to={`/dashboard/payment/${booking._id}`}>
                      <button className="btn btn-xs btn-primary">
                        payment
                      </button>
                    </Link>
                  )}
                  {booking.paid && (
                    <button className="btn btn-xs btn-primary">paid</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Myorder;
