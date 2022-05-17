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
  CardContent,
  CardActions,
  CardMedia,
  Collapse,
  Divider,
  FormControl,
  FormHelperText,
  Grid,
  Input,
  InputLabel,
  Typography,
  RadioGroup,
  FormLabel,
  FormControlLabel,
  Radio,
  Modal,
} from '@mui/material'
import { useMutation } from '@apollo/client'
import { MODAL_BOX_STYLE } from '../../modules/modals'
import { Center, ErrorMessage } from '../../components'
import { UpdateBook, CATEGORIES, SUB_CATEGORIES } from '../../modules/books'
import type {
  Book,
  BookInput,
  BookResponse,
  CategoryKey,
  SubCategoryKey,
  UpdateBookInput,
  UpdateBookResult,
} from '../../types'

const DeleteBook = React.lazy(() => import('./DeleteBook'))

const CLEAR_RESULT_LABEL_SEC = 10

export interface BookEditorProps {
  book: Book
  refetch: () => Promise<any>
  children?: null | ReactNode | ReactNode[]
}

export const BookEditor: React.FC<BookEditorProps> = ({ book, refetch }) => {
  const { bookId, ...bookEdit } = book
  const [updateBook, { error: mutationError }] = useMutation<
    UpdateBookResult,
    UpdateBookInput
  >(UpdateBook)

  const [result, setResult] = useState<BookResponse>()
  const [isEditing, setIsEditing] = useState<boolean>(false)
  const [deleteOpen, setDeleteOpen] = useState<boolean>(false)
  const [showCoverImg, setShowCoverImg] = useState<boolean>(false)
  const [showCategories, setShowCategories] = useState<boolean>(false)
  const [showSubCategories, setShowSubCategories] = useState<boolean>(false)
  const [updateBookInput, setUpdateBookInput] = useState<BookInput>(bookEdit)

  const editBookInput = <K extends keyof BookInput>(
    key: K,
    value: BookInput[K]
  ) => setUpdateBookInput({ ...updateBookInput, [key]: value })

  let error: string | undefined = undefined

  const update = async () => {
    setTimeout(() => setIsEditing(true), 0)
    const { data } = await updateBook({
      variables: {
        bookId: bookId,
        input: {
          bookTitle: updateBookInput.bookTitle,
          bookCategory: updateBookInput.bookCategory,
          bookSubCategory: updateBookInput.bookSubCategory,
          bookDescription: updateBookInput.bookDescription,
          bookPrice: updateBookInput.bookPrice,
          bookImgFile: updateBookInput.bookImgFile,
        },
      },
    })

    if (data && data.result) {
      setTimeout(() => setResult(data.result), 5)
      if (data.result.success) {
        await refetch()
      }
    } else {
      error = 'Unknown. Check F12 console.'
    }
    setTimeout(() => setIsEditing(false), 10)
    // clear green label after 10 seconds
    setTimeout(() => setResult(undefined), CLEAR_RESULT_LABEL_SEC * 1000)
  }

  const category = updateBookInput.bookCategory as CategoryKey
  const subCategory = updateBookInput.bookSubCategory as SubCategoryKey

  return (
    <Card sx={{ textAlign: 'center' }}>
      {deleteOpen && (
        <Suspense>
          <Modal open={deleteOpen} onClose={() => setDeleteOpen(false)}>
            <Box sx={MODAL_BOX_STYLE}>
              <DeleteBook
                book={book}
                closeModal={() => setDeleteOpen(false)}
                refetch={refetch}
              />
            </Box>
          </Modal>
        </Suspense>
      )}
      <CardContent>
        <Box>
          <FormControl fullWidth>
            <InputLabel htmlFor={`title-input-${bookId}`}>Title</InputLabel>
            <Input
              fullWidth
              id={`title-input-${bookId}`}
              type='text'
              aria-describedby={`title-text-${bookId}`}
              value={updateBookInput.bookTitle}
              onChange={(event) =>
                editBookInput('bookTitle', event.target.value)
              }
            />
            <FormHelperText id={`title-text-${bookId}`}>
              Title for this book
            </FormHelperText>
          </FormControl>
        </Box>
      </CardContent>
      <Box sx={{ padding: 1 }}>
        <Divider />
      </Box>
      <CardMedia>
        <Box sx={{ padding: 2 }}>
          <FormControl fullWidth>
            <InputLabel htmlFor={`image-input-${bookId}`}>
              Image File Name
            </InputLabel>
            <Input
              fullWidth
              id={`image-input-${bookId}`}
              type='text'
              aria-describedby={`image-text-${bookId}`}
              value={updateBookInput.bookImgFile}
              onChange={(event) =>
                editBookInput('bookImgFile', event.target.value)
              }
            />
            <FormHelperText id={`image-text-${bookId}`}>
              Image file this book
            </FormHelperText>
          </FormControl>
        </Box>
        <Box
          sx={{
            display: 'block',
            justifyContent: 'center',
            textAlign: 'center',
          }}>
          <ButtonGroup variant='outlined'>
            <Button onClick={() => setShowCoverImg(!showCoverImg)}>
              {showCoverImg ? 'Hide' : 'Show'} Cover Image
            </Button>
          </ButtonGroup>
        </Box>
        <Box sx={{ padding: 2 }}>
          <Collapse in={showCoverImg} timeout='auto' unmountOnExit>
            <Box
              sx={{
                border: '1px dashed grey',
                display: 'block',
                justifyContent: 'center',
                textAlign: 'center',
              }}>
              <img
                width={300}
                height={450}
                alt={updateBookInput.bookTitle + ' cover image'}
                src={
                  process.env.PUBLIC_URL +
                  '/book_img/' +
                  updateBookInput.bookImgFile
                }
              />
            </Box>
          </Collapse>
        </Box>
      </CardMedia>
      <CardContent>
        <Box>
          <FormControl fullWidth>
            <InputLabel htmlFor={`description-input-${bookId}`}>
              Description
            </InputLabel>
            <Input
              fullWidth
              id={`description-input-${bookId}`}
              type='text'
              multiline
              rows={3}
              aria-describedby={`description-text-${bookId}`}
              value={updateBookInput.bookDescription}
              onChange={(event) =>
                editBookInput('bookDescription', event.target.value)
              }
            />
            <FormHelperText id={`description-text-${bookId}`}>
              Description for this book
            </FormHelperText>
          </FormControl>
        </Box>
        <Box sx={{ padding: 1 }}>
          <FormControl fullWidth>
            <FormLabel id='bookCategory-group-text'>
              New Book Category
            </FormLabel>
            <Box sx={{ padding: 1 }}>
              <Typography variant='subtitle1'>
                {CATEGORIES[category].label}
              </Typography>
            </Box>
            <Box
              sx={{
                padding: 1,
                display: 'block',
                justifyContent: 'center',
                textAlign: 'center',
              }}>
              <ButtonGroup variant='outlined'>
                <Button onClick={() => setShowCategories(!showCategories)}>
                  {showCategories ? 'Hide' : 'Show'} Book Sub-Categories
                </Button>
              </ButtonGroup>
            </Box>
            <Collapse in={showCategories} timeout='auto' unmountOnExit>
              <RadioGroup
                aria-labelledby='bookCategory-group-text'
                value={updateBookInput.bookCategory}
                sx={{ padding: 2 }}
                onChange={(event) =>
                  editBookInput('bookCategory', event.target.value)
                }>
                <Grid container sx={{ textAlign: 'left' }}>
                  {Object.entries(CATEGORIES).map(([key, info]) => (
                    <Grid item key={key} xs={6}>
                      <FormControlLabel
                        label={info.label}
                        value={key}
                        control={<Radio />}
                      />
                    </Grid>
                  ))}
                </Grid>
              </RadioGroup>
            </Collapse>
          </FormControl>
        </Box>
        <Box sx={{ padding: 1, paddingBottom: 3 }}>
          <FormControl fullWidth>
            <FormLabel id='bookSubCategory-group-text'>
              New Book Sub-Category
            </FormLabel>
            <Box sx={{ padding: 1 }}>
              <Typography variant='subtitle1'>
                {SUB_CATEGORIES[subCategory].label}
              </Typography>
            </Box>
            <Box
              sx={{
                padding: 1,
                display: 'block',
                justifyContent: 'center',
                textAlign: 'center',
              }}>
              <ButtonGroup variant='outlined'>
                <Button
                  onClick={() => setShowSubCategories(!showSubCategories)}>
                  {showSubCategories ? 'Hide' : 'Show'} Book Sub-Categories
                </Button>
              </ButtonGroup>
            </Box>
            <Collapse in={showSubCategories} timeout='auto' unmountOnExit>
              <RadioGroup
                aria-labelledby='bookSubCategory-group-text'
                value={updateBookInput.bookSubCategory}
                sx={{ padding: 2 }}
                onChange={(event) =>
                  editBookInput('bookSubCategory', event.target.value)
                }>
                <Grid container sx={{ textAlign: 'left' }}>
                  {Object.entries(SUB_CATEGORIES).map(([key, info]) => (
                    <Grid item key={key} xs={6}>
                      <FormControlLabel
                        label={info.label}
                        value={key}
                        control={<Radio />}
                      />
                    </Grid>
                  ))}
                </Grid>
              </RadioGroup>
            </Collapse>
          </FormControl>
        </Box>
        <Box>
          <FormControl sx={{ bottom: 0, left: 0 }}>
            <InputLabel htmlFor={`price-input-${bookId}`}>Price</InputLabel>
            <Input
              id={`price-input-${bookId}`}
              type='number'
              aria-describedby={`price-text-${bookId}`}
              value={updateBookInput.bookPrice}
              onChange={(event) =>
                editBookInput(
                  'bookPrice',
                  parseFloat(parseFloat(event.target.value).toFixed(2))
                )
              }
            />
            <FormHelperText id={`price-text-${bookId}`}>
              Price for this book
            </FormHelperText>
          </FormControl>
        </Box>
      </CardContent>
      <Box sx={{ padding: 1 }}>
        <Divider />
      </Box>
      <CardActions
        sx={{
          display: 'block',
          justifyContent: 'center',
          textAlign: 'center',
        }}>
        <ButtonGroup variant='contained'>
          <Button color='error' onClick={() => setDeleteOpen(true)}>
            Delete Book
          </Button>
          <Button color='success' disabled={isEditing} onClick={update}>
            Submit Book Edits
          </Button>
        </ButtonGroup>
      </CardActions>
      {error && (
        <Center>
          <ErrorMessage text={`Error: ${error}`} />
        </Center>
      )}
      {mutationError && (
        <Center>
          <ErrorMessage text={`GraphQL Error: ${mutationError.message}`} />
        </Center>
      )}
      {result && result.errors && (
        <Center>
          <ErrorMessage
            text={`Apollo-Client Error: ${result.errors.join(', ')}`}
          />
        </Center>
      )}
      {result && result.success && (
        <Box sx={{ display: 'block', textAlign: 'center' }}>
          <Typography sx={{ color: 'green' }} variant='subtitle2'>
            Successfully edited book:
          </Typography>
          <Typography sx={{ color: 'green' }} variant='subtitle1'>
            "{book.bookTitle}"
          </Typography>
        </Box>
      )}
    </Card>
  )
}

export default BookEditor
