import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Layout from "./Components/Layout/Layout";

import Error from "./Components/ERROR/Error";
import Signup from "./Components/LOGIN/Signup/Signup";
import Login from "./Components/LOGIN/Login/Login";
import AuthProvider from "./Components/Provider/AuthProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./Components/Home/Home";
import Detailpage from "./Components/ProductDetail/Detailpage";
import AllToy from "./Components/ALLToy/AllToy";
import ContactUS from "./Components/Contact/ContactUS";
import DashboardNav from "./Components/DashBoard/DashboardNav/DashboardNav";
import Mycart from "./Components/DashBoard/User/Mycart";

// import Privateroute from "./Component/PrivateRoute/Privateroute";

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
          fetch(`http://localhost:5000/toys/${params.id}`),
      },
      {
        path: "/cart",
        element: <Mycart />,
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
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>
);
