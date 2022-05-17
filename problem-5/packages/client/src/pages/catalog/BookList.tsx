/**
 * @author John Carr <jxc9224@rit.edu>
 * @license MIT
 */

import React, { useState, ReactNode, Suspense } from 'react'
import { useQuery } from '@apollo/client'
import {
  Box,
  Button,
  ButtonGroup,
  Grid,
  Typography,
  BoxProps,
} from '@mui/material'

import { ErrorMessage } from '../../components'
import { FindAllBooks, SORT_FUNCTIONS } from '../../modules/books/index'
import type { Book, FindAllBooksResult, SortState } from '../../types'

const BookCard = React.lazy(() => import('./BookCard'))

const BOOKS_PER_PAGE = 16

export interface BookListProps extends BoxProps {
  search: string
  sort: SortState
  children?: null | ReactNode | ReactNode[]
}

export const BookList: React.FC<BookListProps> = ({
  sort,
  search,
  ...boxProps
}) => {
  const { data, loading, error } = useQuery<FindAllBooksResult>(FindAllBooks)
  const [pageNum, setPageNum] = useState<number>(1)

  if (loading) return <Typography variant='body1'>loading...</Typography>
  if (error) return <ErrorMessage text={error.message} />

  let bookList: Book[] = !data
    ? []
    : [...data.books].filter(
        (book: Book) =>
          search === '' ||
          book.bookTitle.toLowerCase().search(search.toLowerCase()) > -1
      )

  Object.keys(sort).forEach((sortKey: string) => {
    const sortGroup = SORT_FUNCTIONS[sortKey as keyof typeof SORT_FUNCTIONS]
    const sortFunc: (a: Book, b: Book) => number =
      sortGroup[sort[sortKey as keyof SortState] as keyof typeof sortGroup]
    bookList = bookList.sort(sortFunc)
  })

  const maxPageNum =
    bookList.length > 0 ? Math.ceil(bookList.length / BOOKS_PER_PAGE) : 1
  if (pageNum > maxPageNum) setPageNum(1)

  const splicePos = (pageNum - 1) * BOOKS_PER_PAGE
  const booksToDisplay = Math.min(BOOKS_PER_PAGE, bookList.length - splicePos)

  return (
    <Box {...boxProps}>
      {bookList.length > 0 ? (
        <Grid container>
          <Grid item xs={12}>
            <Box
              sx={{
                display: 'block',
                justifyContent: 'center',
                paddingBottom: 2,
                textAlign: 'center',
              }}>
              <ButtonGroup variant='contained'>
                <Button onClick={() => setPageNum(Math.max(1, pageNum - 1))}>
                  {`<< `}Prev Page{` <<`}
                </Button>
                <Typography
                  sx={{ paddingLeft: 3, paddingRight: 3 }}
                  variant='h5'>
                  {pageNum} / {maxPageNum}
                </Typography>
                <Button
                  onClick={() => setPageNum(Math.min(pageNum + 1, maxPageNum))}>
                  {`>> `}Next Page{` >>`}
                </Button>
              </ButtonGroup>
            </Box>
          </Grid>
          {bookList.splice(splicePos, booksToDisplay).map((book, index) => (
            <Grid item key={index} xs={3} sx={{ padding: 1 }}>
              <Suspense
                fallback={
                  <Typography variant='body1'>
                    Loading {book.bookTitle}...
                  </Typography>
                }>
                <BookCard book={book} />
              </Suspense>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography sx={{ textAlign: 'center' }} variant='h6'>
          No books found
        </Typography>
      )}
    </Box>
  )
}
