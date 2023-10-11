import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import AddItemTable from './tables/AddItemAtable.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './routes/root.jsx';
import ErrorPage from "./error-page";
import DashBoard from './components/DashBoard.jsx';
import TableCp from './tables/Table.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/dashboard",
        element: <DashBoard />,
      },
      {
        path: "/form",
        element: <h2>Xin chào Form</h2>,
      },
      {
        path: "/table",
        element: <TableCp />,
      },
      {
        path: "/addItemTable",
        element: <AddItemTable />,
      },
      {
        path: "/listuser",
        element: <h2>Xin chào List User</h2>,
      },
    ],
    
  },
  {
    path: "/home",
    element: <div>Home!</div>,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
