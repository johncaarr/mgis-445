/**
 * @author John Carr <jxc9224@rit.edu>
 * @license MIT
 */

import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Box, BoxProps, Tab, Tabs } from '@mui/material'
import type { Page } from '../types'

export interface NavBarProps extends BoxProps {
  pages: Page[]
}

export const NavBar: React.FC<NavBarProps> = ({ pages, ...boxProps }) => {
  const location = useLocation()
  const navigate = useNavigate()
  const [tab, setTab] = useState<Page>(pages[0])
  useEffect(() => {
    const page = pages.find((val) => location.pathname === `/${val.path ?? ''}`)
    if (page && page.order !== tab.order) setTab(page)
  }, [location, navigate, pages, tab, setTab])
  return (
    <Box
      sx={{
        borderBottom: 1,
        borderColor: 'divider',
      }}
      {...boxProps}>
      <Box>
        <Tabs centered aria-label='navigation tabs' value={tab.order}>
          {pages
            .sort((a, d) => a.order - d.order)
            .map((page) => {
              const TabIcon = page.icon
              return (
                <Tab
                  icon={<TabIcon />}
                  key={page.order}
                  label={page.title}
                  value={page.order}
                  onClick={() => navigate(page.path ?? '/')}
                />
              )
            })}
        </Tabs>
      </Box>
      <Box></Box>
    </Box>
  )
}
