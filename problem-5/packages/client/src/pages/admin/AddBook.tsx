/**
 * @author John Carr <jxc9224@rit.edu>
 * @license MIT
 */

import React, { useState, ReactNode } from 'react'
import {
  Box,
  BoxProps,
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  CardMedia,
  Divider,
  FormControl,
  FormHelperText,
  Grid,
  Input,
  InputLabel,
  RadioGroup,
  FormLabel,
  FormControlLabel,
  Radio,
  Typography,
  Container,
} from '@mui/material'
import { useMutation } from '@apollo/client'
import { CreateBook, CATEGORIES, SUB_CATEGORIES } from '../../modules/books'
import { Center, ErrorMessage } from '../../components'

import type {
  CreateBookInput,
  CreateBookResult,
  BookInput,
  BookResponse,
} from '../../types'

export interface AddBookProps extends BoxProps {
  close: () => void
  refetch: () => Promise<any>
  children?: null | ReactNode | ReactNode[]
}

export const AddBook: React.FC<AddBookProps> = ({
  close,
  refetch,
  ...boxProps
}) => {
  const [addBook, { error: mutationError }] = useMutation<
    CreateBookResult,
    CreateBookInput
  >(CreateBook)

  const [result, setResult] = useState<BookResponse>()
  const [isAdding, setIsAdding] = useState<boolean>(false)
  const [addBookInput, setAddBookInput] = useState<BookInput>({
    bookPrice: 4.99,
    bookCategory: 'FICTION',
    bookSubCategory: 'HORROR',
    bookTitle: 'The Call of Cthulhu',
    bookImgFile: 'thecallofcthulhu.jpg',
    bookDescription:
      'Cthulhu, the squid-faced, winged god created by H. P. Lovecraft ' +
      'emerges from the sea after centuries of slumber only to find his ' +
      'dark powers immediately sealed away by a mysterious holy wizard.',
  })

  const editBookInput = <K extends keyof BookInput>(
    key: K,
    value: BookInput[K]
  ) => {
    setTimeout(() => setResult(undefined), 0)
    setAddBookInput({ ...addBookInput, [key]: value })
  }

  let error: string | undefined = undefined

  const add = async () => {
    setTimeout(() => setIsAdding(true), 0)
    const { data } = await addBook({
      variables: {
        input: {
          bookTitle: addBookInput.bookTitle,
          bookCategory: addBookInput.bookCategory,
          bookSubCategory: addBookInput.bookSubCategory,
          bookDescription: addBookInput.bookDescription,
          bookPrice: addBookInput.bookPrice,
          bookImgFile: addBookInput.bookImgFile,
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
    setTimeout(() => setIsAdding(false), 10)
  }

  return (
    <Box {...boxProps}>
      <Card>
        <CardHeader
          title='Add New Book'
          subheader='Create a new book for the Catalog'
          sx={{ display: 'block', textAlign: 'center' }}
        />
        <Box sx={{ padding: 3 }}>
          <Divider />
        </Box>
        <CardContent>
          <Box>
            <FormControl fullWidth>
              <InputLabel htmlFor='bookTitle-input'>New Book Title</InputLabel>
              <Input
                fullWidth
                id='bookTitle-input'
                type='text'
                aria-describedby='bookTitle-text'
                value={addBookInput.bookTitle}
                onChange={(event) =>
                  editBookInput('bookTitle', event.target.value)
                }
              />
              <FormHelperText id='bookTitle-text'>
                Title for the new book
              </FormHelperText>
            </FormControl>
          </Box>
          <Box sx={{ padding: 3 }}>
            <Divider />
          </Box>
          <Box>
            <FormControl fullWidth>
              <InputLabel htmlFor='bookDescription-input'>
                New Book Description
              </InputLabel>
              <Input
                fullWidth
                id='bookDescription-input'
                type='text'
                multiline
                rows={6}
                aria-describedby='bookDescription-text'
                value={addBookInput.bookDescription}
                onChange={(event) =>
                  editBookInput('bookDescription', event.target.value)
                }
              />
              <FormHelperText id='bookDescription-text'>
                Description for the new book
              </FormHelperText>
            </FormControl>
          </Box>
          <Box sx={{ padding: 3 }}>
            <Divider />
          </Box>
          <Box>
            <FormControl fullWidth>
              <FormLabel id='bookCategory-group-text'>
                New Book Category
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby='bookCategory-group-text'
                value={addBookInput.bookCategory}
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
            </FormControl>
          </Box>
          <Box sx={{ padding: 1 }}>
            <Divider />
          </Box>
          <Box>
            <FormControl fullWidth>
              <FormLabel id='bookSubCategory-group-text'>
                New Book Sub-Category
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby='bookSubCategory-group-text'
                value={addBookInput.bookSubCategory}
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
            </FormControl>
          </Box>
          <Box sx={{ padding: 3 }}>
            <Divider />
          </Box>
          <Box sx={{ padding: 2 }}>
            <FormControl fullWidth>
              <InputLabel htmlFor='bookPrice-input'>New Book Price</InputLabel>
              <Input
                id='bookPrice-input'
                type='number'
                aria-describedby='bookPrice-text'
                value={addBookInput.bookPrice}
                onChange={(event) =>
                  editBookInput(
                    'bookPrice',
                    parseFloat(parseFloat(event.target.value).toFixed(2))
                  )
                }
              />
              <FormHelperText id='bookPrice-text'>
                Price for the new book entry
              </FormHelperText>
            </FormControl>
          </Box>
        </CardContent>
        <Box sx={{ padding: 2 }}>
          <Divider />
        </Box>
        <CardMedia>
          <Box sx={{ padding: 2 }}>
            <FormControl fullWidth>
              <InputLabel htmlFor='image-input'>
                Image File Name/Path
              </InputLabel>
              <Input
                fullWidth
                id='image-input'
                type='text'
                aria-describedby='image-text'
                value={addBookInput.bookImgFile}
                onChange={(event) =>
                  editBookInput('bookImgFile', event.target.value)
                }
              />
              <FormHelperText id='bookPrice-text'>
                Image file path the new book
              </FormHelperText>
            </FormControl>
          </Box>
          <Box sx={{ padding: 2 }}>
            <Divider />
          </Box>
          <Container>
            <Box
              sx={{
                display: 'block',
                textAlign: 'center',
                padding: 2,
                border: '1px dashed grey',
              }}>
              <img
                width={300}
                height={450}
                alt={addBookInput.bookTitle + ' new cover image'}
                src={
                  process.env.PUBLIC_URL +
                  '/book_img/' +
                  addBookInput.bookImgFile
                }
              />
            </Box>
          </Container>
        </CardMedia>
        <Box sx={{ padding: 1 }}>
          <Divider />
        </Box>
        <CardActions
          sx={{
            display: 'block',
            justifyContent: 'center',
            paddingBottom: 3,
            textAlign: 'center',
          }}>
          <ButtonGroup variant='contained'>
            <Button color='success' disabled={isAdding} onClick={add}>
              Create New Book Entry
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
            <ErrorMessage text={mutationError.message} />
          </Center>
        )}
        {result && result.errors && (
          <Center>
            <ErrorMessage text={result.errors.join(', ')} />
          </Center>
        )}
        {result && result.success && (
          <Box sx={{ display: 'block', textAlign: 'center' }}>
            <Typography sx={{ color: 'green' }} variant='subtitle2'>
              Successfully added book:
            </Typography>
            <Typography sx={{ color: 'green' }} variant='subtitle1'>
              "{addBookInput.bookTitle}"
            </Typography>
          </Box>
        )}
      </Card>
    </Box>
  )
}

export default AddBook
