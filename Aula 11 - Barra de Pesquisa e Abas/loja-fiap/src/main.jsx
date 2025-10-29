import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/AppRoutes.jsx'
import { ProductsProvider } from './context/FetchProdutos.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductsProvider>

    <RouterProvider router={router} />
    </ProductsProvider>
  </StrictMode>,
)
