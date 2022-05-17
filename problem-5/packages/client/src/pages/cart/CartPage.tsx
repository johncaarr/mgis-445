/**
 * @author John Carr <jxc9224@rit.edu>
 * @license MIT
 */

import React, { useEffect } from 'react'
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../state'

export const CartPage: React.FC = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const cart = useAppSelector((state) => state.cart)
  useEffect(() => {}, [cart])

  const quantityTotal = (): number =>
    cart.items.reduce((q, item) => q + item.quantity, 0)
  const priceSubTotal = (): number =>
    cart.items.reduce((t, item) => t + item.quantity * item.book.bookPrice, 0)

  return (
    <Box className='Cart-page'>
      <Card>
        <CardHeader title='Shopping Cart' />
        <CardContent>
          {cart.items.length === 0 ? (
            <Typography variant='subtitle1'>Your shopping is empty</Typography>
          ) : (
            <Box
              sx={{
                display: 'block',
                justifyContent: 'right',
                textAlign: 'right',
              }}>
              <List>
                <ListItem>
                  <Grid container>
                    <Grid item xs={2}>
                      <ListItemText primary='Amount' />
                    </Grid>
                    <Grid item xs={6}>
                      <ListItemText primary='Book Title' />
                    </Grid>
                    <Grid item xs={4}>
                      <ListItemText primary='Price' />
                    </Grid>
                  </Grid>
                </ListItem>
                {cart.items.map((item, index) => {
                  const price = item.book.bookPrice * item.quantity
                  return (
                    <ListItem key={index}>
                      <Grid container>
                        <Grid item xs={2}>
                          <ListItemText primary={item.quantity} />
                        </Grid>
                        <Grid item xs={6}>
                          <ListItemText primary={item.book.bookTitle} />
                        </Grid>
                        <Grid item xs={2}>
                          <ListItemText primary={`$${price.toFixed(2)}`} />
                        </Grid>
                        <Grid item xs={2}>
                          <ButtonGroup variant='outlined'>
                            <Button
                              color='error'
                              onClick={() => {
                                dispatch({
                                  type: 'cart/removeCartItem',
                                  payload: {
                                    bookTitle: item.book.bookTitle,
                                  },
                                })
                              }}>
                              X
                            </Button>
                          </ButtonGroup>
                        </Grid>
                      </Grid>
                    </ListItem>
                  )
                })}
                <Divider />
                <ListItem>
                  <Grid container>
                    <Grid item xs={2}>
                      <ListItemText primary={quantityTotal()} />
                    </Grid>
                    <Grid item xs={6}>
                      <ListItemText primary='Subtotal' />
                    </Grid>
                    <Grid item xs={4}>
                      <ListItemText
                        primary={`$${priceSubTotal().toFixed(2)}`}
                      />
                    </Grid>
                  </Grid>
                </ListItem>
              </List>
            </Box>
          )}
        </CardContent>
        <CardActions
          sx={{
            display: 'block',
            justifyContent: 'center',
            padding: 3,
            textAlign: 'center',
          }}>
          <ButtonGroup variant='outlined'>
            <Button color='primary' onClick={() => navigate('/catalog')}>
              Go back to Catalog
            </Button>
            <Button
              color='error'
              onClick={() => dispatch({ type: 'cart/clearCart' })}>
              Clear Shopping Cart
            </Button>
          </ButtonGroup>
          <Divider flexItem orientation='vertical' variant='middle'>
            or
          </Divider>
          <ButtonGroup variant='contained'>
            <Button color='success' onClick={() => navigate('/checkout')}>
              Go to Checkout
            </Button>
          </ButtonGroup>
        </CardActions>
      </Card>
    </Box>
  )
}

export default CartPage
