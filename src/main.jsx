import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './assets/styles/main.scss'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Admin from './pages/Admin'

const router = createBrowserRouter([
  { path: "/", element: <App />, },
  { path: "/admin", element: <Admin /> },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
