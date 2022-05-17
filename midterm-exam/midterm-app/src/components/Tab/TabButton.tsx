/**
 * @author John Carr <jxc9224@rit.edu>
 * @license MIT
 */

import styled from 'styled-components'

export interface TabButtonProps {
  active: boolean
}

export const TabButton = styled.button<TabButtonProps>`
  font-size: 20px;
  padding: 10px 60px;
  cursor: pointer;
  opacity: 0.6;
  background: white;
  border: 0;
  outline: 0;
  ${({ active }) =>
    active &&
    `
        border-bottom: 2px solid black; 
        opacity: 1;
    `}
`

export default TabButton
