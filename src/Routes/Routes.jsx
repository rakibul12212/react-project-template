import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";

import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import Error from "../pages/Error";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Home from "../Layout/Home";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/navbar",
        element: <Navbar />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/footer",
        element: <Footer />,
      },
    ],
  },
  {
    path: "*",
    element: <Error />,
  },
]);

export default Routes;
