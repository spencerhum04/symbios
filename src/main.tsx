import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Landing from './routes/landing/landing'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import About from './routes/about/about'

const router = createBrowserRouter([
  {
      path: "/",
      element: <Landing />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <RouterProvider router={router}/>
  </StrictMode>,
)