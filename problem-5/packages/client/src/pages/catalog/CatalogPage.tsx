/**
 * @author John Carr <jxc9224@rit.edu>
 * @license MIT
 */

import { useState } from 'react'
import {
  Box,
  Divider,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  Typography,
} from '@mui/material'

import { BookList } from './BookList'
import { SortButtonGroup } from '../../components'
import type { SortState } from '../../types'

export const CatalogPage = () => {
  const [search, setSearch] = useState<string>('')
  const [sortState, setSortState] = useState<SortState>({})
  return (
    <Box className='Catalog-page'>
      <Box sx={{ justifyContent: 'center', padding: 3, textAlign: 'center' }}>
        <Box sx={{ padding: 1 }}>
          <Typography variant='h5'>
            Use these buttons to sort through our Catalog
          </Typography>
        </Box>
        <SortButtonGroup
          sortState={sortState}
          setSortState={setSortState}
          sx={{ padding: 1 }}
        />
        <Box sx={{ padding: 1, paddingLeft: 20, paddingRight: 20 }}>
          <Divider>and</Divider>
        </Box>
        <Box sx={{ paddingLeft: 35, paddingRight: 35 }}>
          <FormControl fullWidth>
            <InputLabel htmlFor='{`search-title-input`}'>
              Search Title
            </InputLabel>
            <Input
              fullWidth
              id='{`search-title-input`}'
              type='text'
              aria-describedby='{`search-title-text`}'
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
            <FormHelperText id='{`search-title-text`}'>
              Search for this book title
            </FormHelperText>
          </FormControl>
        </Box>
      </Box>
      <Divider />
      <Box sx={{ justifyContent: 'center', padding: 2, textAlign: 'center' }}>
        <BookList
          search={search}
          sort={sortState}
          sx={{ overflow: 'auto', padding: 2 }}
        />
      </Box>
    </Box>
  )
}

export default CatalogPage
