import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter,  RouterProvider } from 'react-router-dom'

import Layout from './Components/Layout.jsx'
import Home from './Components/Home.jsx'
import LoginSignup from './Components/Loginsignup.jsx'
import About from './Components/About.jsx'
import Pricing from './Components/Pricing.jsx'
import Features from './Components/Features.jsx'
import NewProject from './Components/NewProject.jsx'
import Blog from './Components/Blog.jsx'
const router = createBrowserRouter([
  {
    path:"/", element: <Layout/>,
    children: [
      {
        path:'/' , element: <Home/>
      },
      {
        path : 'login' , element : <LoginSignup/>
      },
      {
        path: 'About' , element: <About/>
      },
      {
        path: 'Pricing' , element: <Pricing/>
      },
      {
        path : 'Features', element: <Features/>
      },
      {
        path:'Project' , element: <NewProject/>
      },
      {
        path: 'blog' , element: <Blog/>
      }

    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
    <App />
    </RouterProvider>
  </StrictMode>,
)
