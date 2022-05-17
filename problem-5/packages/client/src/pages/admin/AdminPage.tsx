/**
 * @author John Carr <jxc9224@rit.edu>
 * @license MIT
 */

import React, { useState } from 'react'
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Divider,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
} from '@mui/material'

import { EditorList } from './EditorList'
import { SortButtonGroup } from '../../components'
import type { SortState } from '../../types'

export const AdminPage: React.FC = () => {
  const [search, setSearch] = useState<string>('')
  const [sortState, setSortState] = useState<SortState>({})
  const [modalOpen, setModalOpen] = useState<boolean>(false)
  return (
    <Box className='Admin-page'>
      <Container sx={{ padding: 3 }}>
        <ButtonGroup variant='contained'>
          <Button color='info' onClick={() => setModalOpen(true)}>
            Open Add Book Entry Form
          </Button>
        </ButtonGroup>
      </Container>
      <Divider />
      <SortButtonGroup
        sortState={sortState}
        setSortState={setSortState}
        sx={{ padding: 1 }}
      />
      <Box sx={{ padding: 1 }}>
        <Divider>and</Divider>
      </Box>
      <Box sx={{ paddingBottom: 2, paddingLeft: 35, paddingRight: 35 }}>
        <FormControl fullWidth>
          <InputLabel htmlFor='search-title-input'>Search Title</InputLabel>
          <Input
            fullWidth
            id='search-title-input'
            type='text'
            aria-describedby='search-title-text'
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
          <FormHelperText id='search-title-text'>
            Search for this book title
          </FormHelperText>
        </FormControl>
      </Box>
      <Divider />
      <EditorList
        search={search}
        sort={sortState}
        modalOpen={modalOpen}
        closeModal={() => setModalOpen(false)}
        sx={{ overflow: 'auto', padding: 2 }}
      />
    </Box>
  )
}

export default AdminPage
