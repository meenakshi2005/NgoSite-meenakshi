import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from "./Components/Home";
import ErrorPage from "./error-page";
import Form from "./Components/Form";
// import App from "./App";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Donate from "./Components/Donate";
import NextPage from "./Components/NextPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement:<ErrorPage />
  },
  {
    path:"/Form",
    element:<Form />
  },
  {
    path:"/About",
    element:<About />
  },
  {
    path:"/Contact",
    element:<Contact />
  },
  {
    path:"/Donate",
    element:<Donate />
  },
  {
    path:"/NextPage",
    element:<NextPage />
  },


]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);