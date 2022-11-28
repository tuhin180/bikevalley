import { useQuery } from "@tanstack/react-query";
import React from "react";
import Spinner from "../../Spinner/Spinner";

const Seller = () => {
  const {
    isLoading,
    error,
    data: allSeller,
  } = useQuery({
    queryKey: ["seller"],
    queryFn: () =>
      fetch(`${process.env.REACT_APP_API_URL}/users/allseller`).then((res) =>
        res.json()
      ),
  });

  if (isLoading) return <Spinner></Spinner>;

  if (error) return "An error has occurred: " + error.message;
  return (
    <div>
      <h1 className="text-3xl m-4">All seller</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>email</th>
              <th>role</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {allSeller.map((seller, i) => (
              <tr key={i}>
                <th>{i + 1}</th>
                <td>{seller.name}</td>
                <td>{seller.email}</td>
                <td>{seller.role}</td>
                <td>
                  <button className=" btn btn-xs btn-accent">delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Seller;
