import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayouut from "./layouts/MainLayout/MainLayouut";
import Home from "./pages/Home";
import Motivation from "./pages/Motivation";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouut></MainLayouut>,
    children: [
      {
        path: "/", 
        element: <Home></Home>,
      },
      {
        path: "contact", 
        element: <Contact></Contact>,
      },
      {
        path: "motivation", 
        element: <Motivation></Motivation>,
      },
      {
        path: "blog", 
        element: <Blog></Blog>,
      },
    
    ],
  },
  
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
