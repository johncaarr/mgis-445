/**
 * @author John Carr <jxc9224@rit.edu>
 * @license MIT
 */

import React, { ReactNode } from 'react'
import { Box, Button, ButtonGroup, Typography, Container } from '@mui/material'
import { useMutation } from '@apollo/client'
import { DeleteBook } from '../../modules/books'
import { Center, ErrorMessage } from '../../components'
import type { Book, DeleteBookInput, DeleteBookResult } from '../../types'

export interface DeleteBookProps {
  book: Book
  closeModal: () => void
  refetch: () => Promise<any>
  children?: null | ReactNode | ReactNode[]
}

export const DeleteBookBox: React.FC<DeleteBookProps> = ({
  book,
  closeModal,
  refetch,
}) => {
  const [deleteBook, { error }] = useMutation<
    DeleteBookResult,
    DeleteBookInput
  >(DeleteBook)

  const submit = async () => {
    const { data } = await deleteBook({
      variables: {
        bookId: book.bookId,
      },
    })

    if (data && data.result) {
      if (data.result.success) {
        await refetch()
      }
    }
  }

  return (
    <Box
      sx={{ display: 'block', justifyContent: 'center', textAlign: 'center' }}>
      {error && (
        <Container sx={{ padding: 1 }}>
          <Center>
            <ErrorMessage text={`Error: ${error}`} />
          </Center>
        </Container>
      )}
      <Container sx={{ padding: 1 }}>
        <Typography variant='h5'>Are you sure...</Typography>
      </Container>
      <Container sx={{ padding: 1 }}>
        <Typography variant='subtitle1'>
          That you want to delete book "{book.bookTitle}"?
        </Typography>
      </Container>
      <Container sx={{ padding: 1 }}>
        <ButtonGroup variant='contained'>
          <Button color='success' onClick={closeModal}>
            NO - Return to Admin Panel
          </Button>
          <Button color='error' onClick={submit}>
            YES - Delete Book
          </Button>
        </ButtonGroup>
      </Container>
    </Box>
  )
}

export default DeleteBookBox
