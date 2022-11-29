import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import toast from "react-hot-toast";
import ConformationModal from "../../Shared/ConformationModal";
import Spinner from "../../Spinner/Spinner";

const AllUser = () => {
  const [deleteUsesr, setDeleteUser] = useState(null);

  const closeModal = () => {
    setDeleteUser(null);
  };

  const {
    isLoading,
    error,
    data: users,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: () =>
      fetch(`${process.env.REACT_APP_API_URL}/users`).then((res) => res.json()),
  });

  if (isLoading) return <Spinner />;

  if (error) return "An error has occurred: " + error.message;

  const handleDelete = (user) => {
    fetch(`${process.env.REACT_APP_API_URL}/users/${user._id}`, {
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
      <h2 className="m-4 text-3xl">Number of user {users.length}</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>email</th>
              <th>delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr key={i}>
                <th>{i + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <label
                    onClick={() => setDeleteUser(user)}
                    htmlFor="conformationModal"
                    className="btn btn-accent btn-xs"
                  >
                    delete
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {deleteUsesr && (
        <ConformationModal
          title={`are you sure you want to delete`}
          message={`if you delete ${deleteUsesr.name} it will gone for forever`}
          successAction={handleDelete}
          modalData={deleteUsesr}
          closeModal={closeModal}
        ></ConformationModal>
      )}
    </div>
  );
};

export default AllUser;
