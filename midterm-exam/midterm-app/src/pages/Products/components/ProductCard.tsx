/**
 * @author John Carr <jxc9224@rit.edu>
 * @license MIT
 */

import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Card, CardHeader, CardBody, Col, Container, Row } from 'reactstrap'

import InputQuantityField from '../../../components/Input/InputQuantityField'
import ModalButton from '../../../components/Modal/ModalButton'

const QUANTITY_MIN: number = 1
const QUANTITY_MAX: number = 2048

export interface ProductCardProps {
  name: string
  description: string
  unitprice: number
  redirect: any
}

export const ProductCard = (props: ProductCardProps) => {
  const [quantity, setQuantityState] = useState(QUANTITY_MIN)
  const dispatch = useDispatch()

  const addToCart = () =>
    dispatch({
      type: 'cart/cartAdd',
      payload: {
        name: props.name,
        quantity: quantity,
        unitprice: props.unitprice,
      },
    })

  const goToCart = (): void => {
    props.redirect(2)
  }

  const keepShopping = (): void => {}

  return (
    <Card>
      <CardHeader>
        <h4>{props.name}</h4>
      </CardHeader>
      <CardBody>
        <div className='Product-description'>{props.description}</div>
        <div
          id='card-break'
          style={{
            paddingTop: 5,
            paddingBottom: 5,
            paddingLeft: 25,
            paddingRight: 25,
          }}>
          <hr />
        </div>
        <div className='Product-price'>
          <h4>
            <strong>{'Unit Price: '}</strong>
            <span>{'$'}</span>
            {props.unitprice}
          </h4>
        </div>
        <div style={{ paddingBottom: 10 }} />
        <InputQuantityField
          label='Quantity'
          min={QUANTITY_MIN}
          max={QUANTITY_MAX}
          value={quantity}
          onUpdate={setQuantityState}
        />
        <div style={{ paddingBottom: 10 }} />
        <ModalButton
          value='Add to cart'
          size='lg'
          title='Checkout'
          onOpen={addToCart}
          accept='Go to Cart'
          onAccept={goToCart}
          decline='Keep shopping'
          onDecline={keepShopping}>
          <div className='Modal-body'>
            <Container>
              <Row>
                <Col sm='2' style={{ textAlign: 'right' }}>
                  {quantity}
                </Col>
                <Col sm='6' style={{ textAlign: 'right' }}>
                  <p>{props.name}</p>
                  <div style={{}}>
                    <hr />
                    <strong>{'Subtotal:'}</strong>
                  </div>
                </Col>
                <Col sm='3' style={{ textAlign: 'left' }}>
                  <p>
                    <span>{'$'}</span>
                    {props.unitprice}
                  </p>
                  <div style={{}}>
                    <hr />
                    <strong>
                      <span>{'$'}</span>
                      {(props.unitprice * quantity).toFixed(2)}
                    </strong>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </ModalButton>
      </CardBody>
    </Card>
  )
}

export default ProductCard
