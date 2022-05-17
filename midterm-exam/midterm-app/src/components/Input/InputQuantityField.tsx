/**
 * @author John Carr <jxc9224@rit.edu>
 * @license MIT
 */

import { useState } from 'react'
import { Input, InputGroup, InputGroupText } from 'reactstrap'

export interface InputQuantityFieldProps {
  label: string
  min: number
  max: number
  value: number
  onUpdate: any
}

export const InputQuantityField = (props: InputQuantityFieldProps) => {
  const [quantity, setQuantityState] = useState(props.value)

  const setQuantity = (quantity: number): void => {
    props.onUpdate(quantity)
    setQuantityState(Math.min(props.max, Math.max(props.min, quantity)))
  }

  return (
    <div className='Input-quantity-field'>
      <InputGroup>
        <InputGroupText>{props.label}</InputGroupText>
        <Input
          type='text'
          style={{ textAlign: 'right' }}
          min={props.min}
          max={props.max}
          value={quantity}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            // make manual input change only accept numbers
            // if user entered value isn't a number, use existing value
            setQuantity(Number(event.target.value) || props.value)
          }}
        />
      </InputGroup>
    </div>
  )
}

export default InputQuantityField
