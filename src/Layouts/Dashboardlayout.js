import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";

import Navbar from "../components/Shared/Navbar";
import { AuthContext } from "../Context/AuthProvider";
import useAdmin from "../Hooks/useAdmin";
import useSeller from "../Hooks/useSeller";
import useUsers from "../Hooks/useUsers";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  const [isSeller] = useSeller(user?.email);
  const [isUser] = useUsers(user?.email);
  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-Drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content ">
          {/* <!-- Page content here --> */}
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-Drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            {isUser && (
              <>
                <li>
                  <Link to="/dashboard/myorder">My Order</Link>
                </li>
              </>
            )}

            {isAdmin && (
              <>
                <li>
                  <Link to="/dashboard/alluser">All User</Link>
                </li>
                <li>
                  <Link to="/dashboard/allseller">All Seller</Link>
                </li>
              </>
            )}

            {isSeller && (
              <>
                <li>
                  <Link to="/dashboard/myproduct">My Product</Link>
                </li>
                <li>
                  <Link to="/dashboard/addproduct">Add Product</Link>
                </li>
                <li>
                  <Link to="/dashboard/mybuyer">My Buyer</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
