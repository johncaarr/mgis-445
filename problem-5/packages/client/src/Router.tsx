/**
 * @author John Carr <jxc9224@rit.edu>
 * @license MIT
 */

import { Provider } from 'react-redux'
import React, { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Typography } from '@mui/material'

import store from './state/store'
import Layout from './components/Layout'

const AdminPage = React.lazy(() => import('./pages/admin/AdminPage'))
const CatalogPage = React.lazy(() => import('./pages/catalog/CatalogPage'))
const CartPage = React.lazy(() => import('./pages/cart/CartPage'))
const CheckoutPage = React.lazy(() => import('./pages/checkout/CheckoutPage'))
const HomePage = React.lazy(() => import('./pages/home/HomePage'))

const Router: React.FC = () => {
  return (
    <Provider store={store}>
      <Suspense
        fallback={<Typography variant='body1'>Loading page...</Typography>}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path='admin' element={<AdminPage />} />
              <Route path='cart' element={<CartPage />} />
              <Route path='catalog' element={<CatalogPage />} />
              <Route path='checkout' element={<CheckoutPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Suspense>
    </Provider>
  )
}

export default Router
