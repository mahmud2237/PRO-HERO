import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';


const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Hello from react router!</div>
  },
  {
    path: '/about',
    element: <div>Hello from About Page!</div>
  },
  {
    path: '/Home',
    element: <div>Hello from Home!</div>
  },
  {
    path: '/Contact',
    element: <div>Contact me right now!</div>
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
