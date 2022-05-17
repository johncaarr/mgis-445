/**
 * @author John Carr <jxc9224@rit.edu>
 * @license MIT
 */

import React, { useState, Suspense } from 'react'
import {
  Box,
  BoxProps,
  Button,
  ButtonGroup,
  Fab,
  Grid,
  Modal,
  Typography,
} from '@mui/material'
import { useQuery } from '@apollo/client'
import CloseIcon from '@mui/icons-material/Close'
import { ErrorMessage } from '../../components'
import { MODAL_BOX_STYLE } from '../../modules/modals'
import { FindAllBooks, SORT_FUNCTIONS } from '../../modules/books'
import type { Book, FindAllBooksResult, SortState } from '../../types'

const AddBook = React.lazy(() => import('./AddBook'))
const BookEditor = React.lazy(() => import('./BookEditor'))

const BOOKS_PER_PAGE = 4

export interface EditorListProps extends BoxProps {
  closeModal: () => void
  modalOpen: boolean
  search: string
  sort: SortState
}

export const EditorList: React.FC<EditorListProps> = ({
  closeModal,
  modalOpen,
  search,
  sort,
  ...boxProps
}) => {
  const { data, loading, error, refetch } =
    useQuery<FindAllBooksResult>(FindAllBooks)
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

  Object.keys(sort).forEach((key) => {
    const sortGroup = SORT_FUNCTIONS[key as keyof typeof SORT_FUNCTIONS]
    const sortFunc: (a: Book, b: Book) => number =
      sortGroup[sort[key as keyof SortState] as keyof typeof sortGroup]
    bookList = bookList.sort(sortFunc)
  })

  const maxPageNum =
    bookList.length > 0 ? Math.ceil(bookList.length / BOOKS_PER_PAGE) : 1
  if (pageNum > maxPageNum) setPageNum(1)

  const splicePos = (pageNum - 1) * BOOKS_PER_PAGE
  const booksToDisplay = Math.min(BOOKS_PER_PAGE, bookList.length - splicePos)

  return (
    <Box {...boxProps}>
      <Modal open={modalOpen} onClose={closeModal}>
        <Box sx={MODAL_BOX_STYLE}>
          <Fab
            aria-label='exit'
            color='error'
            onClick={closeModal}
            sx={{ position: 'fixed', top: 16, right: 16 }}>
            <CloseIcon />
          </Fab>
          <AddBook close={closeModal} refetch={refetch} sx={{ padding: 1 }} />
        </Box>
      </Modal>
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
          {bookList.splice(splicePos, booksToDisplay).map((book) => (
            <Grid item key={book.bookId} sx={{ padding: 2 }} xs={3}>
              <Suspense
                fallback={
                  <Typography variant='body1'>
                    Loading {book.bookTitle}...
                  </Typography>
                }>
                <BookEditor book={book} refetch={refetch} />
              </Suspense>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography sx={{ textAlign: 'center' }} variant='h6'>
          No books to edit
        </Typography>
      )}
    </Box>
  )
}
