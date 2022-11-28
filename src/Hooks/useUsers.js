import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useUsers = (email) => {
  const [isUser, setIsUser] = useState(false);
  const [isUserLoading, setIsUserLoading] = useState(true);
  useEffect(() => {
    if (email) {
      fetch(`${process.env.REACT_APP_API_URL}/users/${email}`, {
        headers: {
          authorization: `bearer ${localStorage.getItem("bikevalley-token")}`,
        },
      }).then((res) =>
        res.json().then((data) => {
          console.log(data);
          toast.error(data.message);
          setIsUser(data.isUser);
          setIsUserLoading(false);
        })
      );
    }
  }, [email]);
  return [isUser, isUserLoading];
};
export default useUsers;
