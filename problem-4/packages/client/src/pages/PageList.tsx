/**
 * @author John Carr <jxc9224@rit.edu>
 * @license MIT
 */

import React from 'react'
import type { Page } from '../types'

import HomeIcon from '@mui/icons-material/HomeSharp'
import MenuIcon from '@mui/icons-material/RestaurantSharp'

export const PAGE_LIST: Page[] = [
  {
    title: 'Home',
    header: '',
    element: React.lazy(() => import('./home/HomePage')),
    icon: HomeIcon,
    order: 1,
  },
  {
    title: 'Menu',
    header: 'Menus',
    element: React.lazy(() => import('./menu/MenuPage')),
    icon: MenuIcon,
    path: 'menu',
    order: 2,
  },
]

export default PAGE_LIST
