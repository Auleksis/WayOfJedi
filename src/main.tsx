import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutPage from "./pages/AboutPage/AboutPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h2>Ooops. It seems this page doesn't exist</h2>,
    children: [
      {
        path: "about/",
        element: <AboutPage />,
      },
      {
        path: "/",
        element: <AboutPage />,
      },
      // {
      //   path: "way/",
      //   element: <WayPage />,
      // },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
