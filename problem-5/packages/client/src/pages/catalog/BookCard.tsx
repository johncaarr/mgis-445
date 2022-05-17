/**
 * @author John Carr <jxc9224@rit.edu>
 * @license MIT
 */

import React, { useState, ReactNode, Suspense } from 'react'
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardProps,
  CardHeader,
  CardContent,
  CardActions,
  CardMedia,
  FormControl,
  Grid,
  Input,
  InputLabel,
  Modal,
  Typography,
} from '@mui/material'

import { CATEGORIES, SUB_CATEGORIES } from '../../modules/books'
import { useAppDispatch } from '../../state'
import type { Book } from '../../types/'

const AddedToCartModal = React.lazy(() => import('./AddedToCartModal'))

export interface BookCardProps extends CardProps {
  book: Book
  children?: null | ReactNode | ReactNode[]
}

export const BookCard: React.FC<BookCardProps> = ({ book, ...cardProps }) => {
  const dispatch = useAppDispatch()
  const [quantity, setQuantity] = useState<number>(1)
  const [modalOpen, setModalOpen] = useState<boolean>(false)

  const addToCart = () => {
    dispatch({
      type: 'cart/addCartItem',
      payload: { quantity: quantity, book: book },
    })
    setModalOpen(true)
  }

  const bookCategory =
    CATEGORIES[book.bookCategory as keyof typeof CATEGORIES].label
  const bookSubCategory =
    SUB_CATEGORIES[book.bookSubCategory as keyof typeof SUB_CATEGORIES].label
  const closeModal = () => setModalOpen(false)

  return (
    <Card {...cardProps}>
      <Modal open={modalOpen} onClose={closeModal}>
        <Suspense
          fallback={<Typography variant='body1'>Loading modal...</Typography>}>
          <AddedToCartModal
            book={book}
            quantity={quantity}
            closeModal={closeModal}
          />
        </Suspense>
      </Modal>
      <Box
        sx={{
          height: 100,
          width: '100%',
          overflow: 'auto',
        }}>
        <CardHeader title={book.bookTitle} />
      </Box>
      <Grid container>
        <Grid item xs={8}>
          <Typography variant='subtitle2'>
            {bookCategory} | {bookSubCategory}
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant='h5'>${book.bookPrice}</Typography>
        </Grid>
      </Grid>
      <CardMedia>
        <Box sx={{ padding: 3 }}>
          <img
            width={225}
            height={337}
            alt={book.bookTitle + ' cover image'}
            src={process.env.PUBLIC_URL + '/book_img/' + book.bookImgFile}
          />
        </Box>
      </CardMedia>
      <CardContent>
        <Box
          sx={{
            height: 150,
            width: '100%',
            overflow: 'auto',
          }}>
          <Typography variant='body1'>{book.bookDescription}</Typography>
        </Box>
      </CardContent>
      <CardActions>
        <Grid container sx={{ padding: 1 }}>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <InputLabel htmlFor={`quantity-input-${book.bookId}`}>
                Quantity
              </InputLabel>
              <Input
                fullWidth
                id={`quantity-input-${book.bookId}`}
                type='number'
                aria-describedby={`quantity-text-${book.bookId}`}
                value={quantity}
                onChange={(event) => setQuantity(parseInt(event.target.value))}
              />
            </FormControl>
          </Grid>
          <Grid item xs={6} sx={{ paddingLeft: 1 }}>
            <ButtonGroup variant='contained'>
              <Button onClick={addToCart}>Add to Cart</Button>
            </ButtonGroup>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  )
}

export default BookCard
