
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Layout from "./Components/Layout/Layout";

import Error from "./Components/ERROR/Error";
import Signup from "./Components/LOGIN/Signup/Signup";
import Login from "./Components/LOGIN/Login/Login";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./Components/Home/Home";
import Detailpage from "./Components/ProductDetail/Detailpage";
import AllToy from "./Components/ALLToy/AllToy";
import ContactUS from "./Components/Contact/ContactUS";
import DashboardNav from "./Components/DashBoard/DashboardNav/DashboardNav";
import Mycart from "./Components/DashBoard/User/Mycart";
import Seller from "./Components/DashBoard/Seller/Seller";
import Privateroute from "./Components/Privateroute/Privateroute";
import AuthProvider from "./Components/Provider/Authprovider";



const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "detail/:id",
        element: <Detailpage />,
        loader: ({ params }) =>
          fetch(`https://kiddo-back-end.vercel.app/toys/${params.id}`),
      },
      {
        path: "/cart",
        element: <Privateroute><Mycart /></Privateroute>,
      },
      {
        path: "/Admin",
        element: <Privateroute><Seller /></Privateroute>,
      },

      { path: "/alltoy", element: <AllToy /> },
      { path: "/contact", element: <ContactUS /> },
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </AuthProvider>
  
);
