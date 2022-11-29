import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../Context/AuthProvider";
import Spinner from "../../Spinner/Spinner";

const Myproduct = () => {
  const { user } = useContext(AuthContext);
  const {
    isLoading,
    error,
    data: myProducts,
  } = useQuery({
    queryKey: ["myProduct"],
    queryFn: () =>
      fetch(`${process.env.REACT_APP_API_URL}/bikes?email=${user?.email}`).then(
        (res) => res.json()
      ),
  });

  if (isLoading) return <Spinner></Spinner>;

  if (error) return "An error has occurred: " + error.message;

  const handleAdvertisedItem = (products) => {
    fetch(`${process.env.REACT_APP_API_URL}/advertisedItem`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(products),
    }).then((res) =>
      res.json().then((data) => {
        console.log(data);
        toast.success("succesfully advertised");
      })
    );
  };
  return (
    <div>
      <h1 className="text-2xl">MY product </h1>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>image</th>
              <th>price</th>
              <th>activity</th>
            </tr>
          </thead>
          <tbody>
            {myProducts.map((products, i) => (
              <tr key={i}>
                <th>{i + 1}</th>
                <td>{products.name}</td>
                <td>
                  <img className="w-12" src={products.img} alt="" />
                </td>
                <td>{products.resale_price}</td>

                <td>
                  {products.status && (
                    <>
                      <button
                        onClick={() => handleAdvertisedItem(products)}
                        className="btn btn-primary btn-xs"
                      >
                        advertised
                      </button>
                    </>
                  )}
                  {!products.status && (
                    <>
                      <button className="btn btn-accent btn-xs">delete</button>
                    </>
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

export default Myproduct;
