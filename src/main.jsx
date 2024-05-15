import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from "./routes/root";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import './index.css'
import ErrorPage from './error-page';
import AdminDashboard from './pages/AdminDashboard';
import Flota from './pages/Flota';
import Clientes from './pages/Clientes';
import QuienesSomos from './pages/QuienesSomos';
import AdminLoginPage from './pages/AdminLoginPage';
import PaginaServicios from './components/PaginaServicios';
import Contactos from './pages/Contactos';
import Ubicaciones from './pages/Ubicaciones';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />

  },

  {
    path: "AdminDashboard",
    element: <AdminDashboard />,
  },


  {
    path: "Flota",
    element: <Flota/>,
  },

  {
    path: "Clientes",
    element: <Clientes/>,
  },

  {
    path: "QuienesSomos",
    element: <QuienesSomos/>,
  },

  {
    path: "AdminLogin",
    element: <AdminLoginPage/>,
  },

  {
    path: "paginaservicios",
    element: <PaginaServicios/>,
  },

  {
    path: "contactanos",
    element: <Contactos/>,
  },

  {
    path: "ubicaciones",
    element: <Ubicaciones/>,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
