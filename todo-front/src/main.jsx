import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout/MainLayouut"; // Corrected spelling
import Home from "./pages/Home";
import Register from './pages/Register';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "home",
        element: <Home></Home>,
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
