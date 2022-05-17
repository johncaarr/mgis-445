/**
 * @author John Carr <jxc9224@rit.edu>
 * @license MIT
 */

import React, { ReactElement, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Layout, Loading } from './components'

interface LazyPageCollection {
  [key: string]: React.LazyExoticComponent<React.FC>
}

const Page: LazyPageCollection = {
  Home: React.lazy(() => import('./pages/HomePage')),
  Films: React.lazy(() => import('./pages/FilmsPage')),
  FilmDetail: React.lazy(() => import('./pages/FilmDetailPage')),
  CharacterDetail: React.lazy(() => import('./pages/CharacterDetailPage')),
  PlanetDetail: React.lazy(() => import('./pages/PlanetDetailPage')),
  StarshipDetail: React.lazy(() => import('./pages/StarshipDetailPage')),
}

export const Router = (): ReactElement => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Page.Home />} />
            <Route path='films'>
              <Route index element={<Page.Films />} />
              <Route path=':id' element={<Page.FilmDetail />} />
            </Route>
            <Route path='characters'>
              <Route index element={<Page.Home />} />
              <Route path=':id' element={<Page.CharacterDetail />} />
            </Route>
            <Route path='planets'>
              <Route index element={<Page.Home />} />
              <Route path=':id' element={<Page.PlanetDetail />} />
            </Route>
            <Route path='starships'>
              <Route index element={<Page.Home />} />
              <Route path=':id' element={<Page.StarshipDetail />} />
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default Router
