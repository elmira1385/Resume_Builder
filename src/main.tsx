import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from './pages/Home';
import "./index.css"
import LoginP from './pages/LoginP';
import RegisterP from './pages/RegisterP';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/login",
    element:<LoginP/> ,
  },
  {
    path: "/register",
    element:<RegisterP/> ,
  },
]);

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}> 
    <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>
)
