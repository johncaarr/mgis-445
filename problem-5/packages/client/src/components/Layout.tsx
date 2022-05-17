/**
 * @author John Carr <jxc9224@rit.edu>
 * @license MIT
 */

import React, { useEffect, useMemo, useState } from 'react'
import { useLocation, useNavigate, Outlet } from 'react-router-dom'
import {
  Box,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material'

import AdminPanelSettingsSharpIcon from '@mui/icons-material/AdminPanelSettingsSharp'
import HomeWorkSharpIcon from '@mui/icons-material/HomeWorkSharp'
import MenuBookSharpIcon from '@mui/icons-material/MenuBookSharp'
import ShoppingBasketSharpIcon from '@mui/icons-material/ShoppingBasketSharp'
import ShoppingCartCheckoutSharpIcon from '@mui/icons-material/ShoppingCartCheckoutSharp'

import { Center } from './Center'
import { useAppSelector } from '../state'

const DRAWER_WIDTH = 240

export const Layout: React.FC = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const cart = useAppSelector((state) => state.cart)

  const quantityTotal: number = useMemo(
    () => cart.items.reduce((quantity, item) => quantity + item.quantity, 0),
    [cart.items]
  )

  const priceSubTotal: number = useMemo(
    () =>
      cart.items.reduce(
        (subTotal, item) => subTotal + item.quantity * item.book.bookPrice,
        0.0
      ),
    [cart.items]
  )

  const [cartSize, setCartSize] = useState<number>(quantityTotal)
  const [checkoutPrice, setCheckoutPrice] = useState<number>(priceSubTotal)

  useEffect(() => {
    setCartSize(quantityTotal)
    setCheckoutPrice(priceSubTotal)
  }, [quantityTotal, priceSubTotal])

  const navigationBar = [
    [
      {
        icon: <HomeWorkSharpIcon />,
        label: 'Home',
        url: '/',
      },
    ],
    [
      {
        icon: <MenuBookSharpIcon />,
        label: 'Catalog',
        url: '/catalog',
      },
    ],
    [
      {
        icon: <ShoppingBasketSharpIcon />,
        label: `Shopping Cart (${cartSize})`,
        url: '/cart',
      },
      {
        icon: <ShoppingCartCheckoutSharpIcon />,
        label: `Checkout ($${checkoutPrice})`,
        url: '/checkout',
      },
    ],
    [
      {
        icon: <AdminPanelSettingsSharpIcon />,
        label: 'Admin Panel',
        url: '/admin',
      },
    ],
  ]

  let pageTitle: string = 'N/A'
  navigationBar.forEach((navigationGroup) =>
    navigationGroup.forEach((navigationItem) => {
      if (navigationItem.url === location.pathname)
        pageTitle = navigationItem.label.split('(')[0]
    })
  )

  return (
    <div className='Layout'>
      <Box sx={{ display: 'flex', overflow: 'auto' }}>
        <Box
          className='Nav-bar'
          component='nav'
          sx={{ width: { sm: DRAWER_WIDTH }, flexShrink: { sm: 0 } }}>
          <Drawer
            variant='permanent'
            sx={{
              display: { xs: 'none', sm: 'block' },
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: DRAWER_WIDTH,
              },
            }}
            open>
            <Toolbar>
              <Typography
                variant='h4'
                component='div'
                sx={{
                  flexGrow: 1,
                  textAlign: 'center',
                }}>
                Scamaz0n
              </Typography>
            </Toolbar>
            <Divider />
            {navigationBar.map((list, listIndex, collection) => (
              <div key={listIndex}>
                <List>
                  {list.map((tab, tabIndex) => (
                    <ListItem
                      button
                      key={tabIndex}
                      onClick={() => {
                        pageTitle = tab.label.split('(')[0]
                        navigate(tab.url)
                      }}>
                      <ListItemIcon>{tab.icon}</ListItemIcon>
                      <ListItemText primary={tab.label} />
                    </ListItem>
                  ))}
                </List>
                <Divider />
              </div>
            ))}
          </Drawer>
        </Box>
        <Box
          className='App-content'
          component='div'
          sx={{
            display: 'block',
            flexGrow: 1,
            overflow: 'auto',
            padding: 1,
            textAlign: 'center',
            width: { sm: `calc(100% - ${DRAWER_WIDTH}px)` },
          }}>
          <Toolbar
            sx={{
              display: 'block',
              padding: 2,
              textAlign: 'center',
            }}>
            <Center
              sx={{
                display: 'block',
                textAlign: 'center',
              }}>
              <Box
                sx={{
                  display: 'block',
                  textAlign: 'center',
                }}>
                <Typography
                  sx={{
                    flexGrow: 1,
                    textAlign: 'center',
                  }}
                  variant='h3'>
                  Scamaz0n - {pageTitle}
                </Typography>
              </Box>
            </Center>
          </Toolbar>
          <Box sx={{ padding: 1, paddingBottom: 2 }}>
            <Divider />
          </Box>
          <Outlet />
        </Box>
      </Box>
    </div>
  )
}

export default Layout
