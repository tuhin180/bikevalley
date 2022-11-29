import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import toast from "react-hot-toast";
import ConformationModal from "../../Shared/ConformationModal";
import Spinner from "../../Spinner/Spinner";

const Seller = () => {
  const [deleteSeller, setDeleteSeller] = useState(null);

  const closeModal = () => {
    setDeleteSeller(null);
  };

  const {
    isLoading,
    error,
    data: allSeller,
    refetch,
  } = useQuery({
    queryKey: ["seller"],
    queryFn: () =>
      fetch(`${process.env.REACT_APP_API_URL}/users/allseller`).then((res) =>
        res.json()
      ),
  });

  if (isLoading) return <Spinner></Spinner>;

  if (error) return "An error has occurred: " + error.message;

  const handleDelete = (seller) => {
    fetch(`${process.env.REACT_APP_API_URL}/users/${seller._id}`, {
      method: "DELETE",
      headers: {
        headers: {
          authorization: `bearer ${localStorage.getItem("bikevalley-token")}`,
        },
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          refetch();
          toast.success("user deleted succesfully");
        }
        console.log(data);
      });
  };

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
                  <button
                    onClick={() => setDeleteSeller(seller)}
                    className=" btn btn-xs btn-accent"
                  >
                    delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {deleteSeller && (
        <ConformationModal
          title={`are you sure you want to delete`}
          message={`if you delete ${deleteSeller.name} it will gone for forever`}
          successAction={handleDelete}
          closeModal={closeModal}
          modalData={deleteSeller}
        ></ConformationModal>
      )}
    </div>
  );
};

export default Seller;
