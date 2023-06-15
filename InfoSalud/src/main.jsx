import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SaludPais from "./componentes/general";
import Conclusion from "./componentes/conclusiones";
import Detalle from "./componentes/especifico";
import { AdminProvider } from "./context/AdminProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/SaludPais",
    element: <SaludPais/>,
  },
  {
    path: "/Detalle",
    element: <Detalle />,
  },
  {
  path: "/Conclusion",
    element: <Conclusion />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AdminProvider>
      <RouterProvider router={router} />
    </AdminProvider>
  </React.StrictMode>
);