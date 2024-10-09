import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout/MainLayouut"; // Corrected spelling
import Home from "./pages/Home";
import Register from './pages/Register';
import Motivation from "./pages/Motivation";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Todo from "./pages/Todo/Todo";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
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
        element: <Todo></Todo>,
      },
      {
        path: "blog", 
        element: <Blog></Blog>,
      },
    
    ],
  },
  {
    path: "/register",
    element: <MainLayout></MainLayout>, // Added missing comma
    children: [
      {
        path: "",
        element: <Register></Register>, // Empty path because it's the same as the parent
      },
    ],
  },

]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
