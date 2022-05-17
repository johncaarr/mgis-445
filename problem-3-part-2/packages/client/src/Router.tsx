/**
 * @author John Carr <jxc9224@rit.edu>
 * @license MIT
 */

import React, { ReactElement } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Layout } from './Layout'
import { HomePage } from './pages/HomePage'
import { ToDoPage } from './pages/ToDoPage'
import { UsersPage } from './pages/UsersPage'

export const Router = (): ReactElement => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='todos' element={<ToDoPage />} />
          <Route path='users' element={<UsersPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
