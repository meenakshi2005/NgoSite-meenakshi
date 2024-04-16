import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";
import Home from "./Components/Home/Home"
import ErrorPage from "./error-page";
import Form from "./Components/DonationForm/Form";
// import App from "./App";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Donate from "./Components/Donate/Donate";
import NextPage from "./Components/NextPage";
import '@fortawesome/fontawesome-free/css/all.css';
import Footer from "./Components/Footer/Footer";


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
    path:"/Nextpage",
    element:<NextPage />
  },
  {
    path:"/Footer",
    element:<Footer />
  }


]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);