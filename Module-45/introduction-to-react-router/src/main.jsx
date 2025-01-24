import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Users from './Users.jsx'
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import Support from './components/Support/Support.jsx';
import UserDetails from './components/UserDetails/UserDetails.jsx';



const router = createBrowserRouter([
  {
    path: '/',
    element: <Header></Header>,
    children: [
      {
        path: '/home',
        element: <Home></Home>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/users',
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        element: <Users></Users>
      },
      {
        path: '/support',
        element: <Support></Support>
      },
      {
        path: '/user/:userId',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${(params.userId)}`),
        element: <UserDetails></UserDetails>
      }
    ]
  },
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
