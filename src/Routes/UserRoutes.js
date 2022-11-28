import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Spinner from "../components/Spinner/Spinner";
import { AuthContext } from "../Context/AuthProvider";
import useUsers from "../Hooks/useUsers";

const UserRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isUser, isUserLoading] = useUsers(user?.email);
  const location = useLocation();
  if (loading || isUserLoading) {
    return <Spinner />;
  }
  if (user && isUser) {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} replace />;
};

export default UserRoutes;
