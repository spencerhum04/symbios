import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Landing from './routes/landing/landing'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const router = createBrowserRouter([
  {
      path: "/",
      element: <Landing />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <Navbar />
      <RouterProvider router={router}/>
      <Footer />
  </StrictMode>,
)