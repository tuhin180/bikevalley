import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Spinner from "../components/Spinner/Spinner";
import { AuthContext } from "../Context/AuthProvider";
import useSeller from "../Hooks/useSeller";

const SellerRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isSeller, isSellerLoading] = useSeller(user?.email);
  const location = useLocation();
  if (loading || isSellerLoading) {
    return <Spinner />;
  }
  if (user && isSeller) {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} replace />;
};

export default SellerRoutes;
