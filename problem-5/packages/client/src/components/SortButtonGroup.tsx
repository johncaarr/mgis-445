/**
 * @author John Carr <jxc9224@rit.edu>
 * @license MIT
 */

import React from 'react'
import { Box, BoxProps, Button, ButtonGroup, Divider } from '@mui/material'
import { SORT_BUTTONS } from '../modules/books'
import type { SortState } from '../types'

export interface SortButtonGroupProps extends BoxProps {
  sortState: SortState
  setSortState: (value: SortState) => void
}

export const SortButtonGroup: React.FC<SortButtonGroupProps> = ({
  sortState,
  setSortState,
  ...boxProps
}) => {
  return (
    <Box {...boxProps}>
      {Object.entries(SORT_BUTTONS).map(([sortKey, buttons], index, array) => {
        const key = sortKey as keyof SortState
        return (
          <ButtonGroup key={index}>
            {Object.entries(buttons).map(([sortValue, buttonLabel]) => {
              const selected = sortState[key] === sortValue
              return (
                <Button
                  key={buttonLabel}
                  color={selected ? 'info' : 'secondary'}
                  variant={selected ? 'contained' : 'outlined'}
                  onClick={() =>
                    setSortState({
                      ...sortState,
                      [key]: selected ? undefined : sortValue,
                    })
                  }>
                  {buttonLabel}
                </Button>
              )
            })}
            {index < array.length - 1 && (
              <Box sx={{ paddingLeft: 1, paddingRight: 1 }}>
                <Divider flexItem orientation='vertical' variant='middle' />
              </Box>
            )}
          </ButtonGroup>
        )
      })}
    </Box>
  )
}
