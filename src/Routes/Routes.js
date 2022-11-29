import { createBrowserRouter } from "react-router-dom";
import Categorisedproducts from "../components/CategoriesProduct/Categorisedproducts";
import AllUser from "../components/Dashboard/AdminUser/AllUser";
import Seller from "../components/Dashboard/AdminUser/Seller";
import Dashboard from "../components/Dashboard/Dashboard";

import Myorder from "../components/Dashboard/MyOrder/Myorder";
import Payment from "../components/Dashboard/MyOrder/Payment";
import AddProduct from "../components/Dashboard/SellerUser.js/AddProduct";
import Mybuyer from "../components/Dashboard/SellerUser.js/Mybuyer";
import Myproduct from "../components/Dashboard/SellerUser.js/Myproduct";
import DashboardLayout from "../Layouts/Dashboardlayout";

import Main from "../Layouts/Main";
import ErrorPage from "../Pages/EroorPage/ErrorPage";
import Blog from "../Pages/Home/Blog/Blog";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Login/SignUp";
import AdminRoutes from "./AdminRoutes";
import PrivateRoutes from "./PrivateRoutes";
import SellerRoutes from "./SellerRoutes";
import UserRoutes from "./UserRoutes";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      { path: "/blog", element: <Blog></Blog> },
      {
        path: "/category/:id",
        loader: ({ params }) =>
          fetch(`${process.env.REACT_APP_API_URL}/category/${params.id}`),
        element: (
          <PrivateRoutes>
            <Categorisedproducts></Categorisedproducts>
          </PrivateRoutes>
        ),
      },
      { path: "/login", element: <Login></Login> },
      { path: "/signup", element: <SignUp></SignUp> },
    ],
  },
  {
    path: "/dashboard",
    errorElement: <ErrorPage></ErrorPage>,
    element: (
      <PrivateRoutes>
        <DashboardLayout />
      </PrivateRoutes>
    ),
    children: [
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/dashboard/myorder",
        element: (
          <UserRoutes>
            <Myorder></Myorder>
          </UserRoutes>
        ),
      },
      {
        path: "/dashboard/alluser",
        element: (
          <AdminRoutes>
            <AllUser></AllUser>
          </AdminRoutes>
        ),
      },
      {
        path: "/dashboard/allseller",
        element: (
          <AdminRoutes>
            <Seller></Seller>
          </AdminRoutes>
        ),
      },
      {
        path: "/dashboard/myproduct",
        element: (
          <SellerRoutes>
            <Myproduct></Myproduct>
          </SellerRoutes>
        ),
      },
      {
        path: "/dashboard/addproduct",
        element: (
          <SellerRoutes>
            <AddProduct></AddProduct>
          </SellerRoutes>
        ),
      },
      {
        path: "/dashboard/mybuyer",
        element: (
          <SellerRoutes>
            <Mybuyer></Mybuyer>
          </SellerRoutes>
        ),
      },
      {
        path: "/dashboard/payment/:id",
        element: (
          <UserRoutes>
            <Payment></Payment>
          </UserRoutes>
        ),
        loader: ({ params }) =>
          fetch(`${process.env.REACT_APP_API_URL}/booking/${params.id}`),
      },
    ],
  },
]);
export default routes;
