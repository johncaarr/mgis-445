/**
 * @author John Carr <jxc9224@rit.edu>
 * @license MIT
 */

import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Container,
  Col,
  Input,
  InputGroup,
  InputGroupText,
  Label,
  Row,
} from 'reactstrap'

import TabGroup from '../../components/Tab/TabGroup'

export interface CartPageProps {
  redirect: any
}

export const CartPage = (props: CartPageProps) => {
  const cart = useSelector((state: any) => state.cart.items)
  const delivery = useSelector((state: any) => state.delivery)
  const dispatch = useDispatch()

  const [saveAddrInfo, setSaveAddrInfoState] = useState(delivery.saveAddrInfo)
  const deliveryUpdate = (event: React.ChangeEvent<HTMLInputElement>) =>
    dispatch({
      type: 'delivery/deliveryModify',
      payload: {
        key: event.target.name,
        value: event.target.value,
      },
    })

  const removeFromCart = (name: string) => {
    dispatch({
      type: 'cart/cartRem',
      payload: {
        name: name,
      },
    })
  }

  const subtotal: number = cart.reduce(
    (total: number, item: any) => total + item.unitprice * item.quantity,
    0
  )
  const salesTax: number = 0.07 * subtotal

  const reviewOrder = (redirect: any) => {
    if (
      delivery.firstName.length < 3 ||
      delivery.lastName.length < 3 ||
      delivery.addrLine1.length < 3 ||
      delivery.email.length < 3 ||
      delivery.phone.length < 5
    ) {
      alert('One or more fields are not filled out correctly')
    } else {
      redirect(2)
    }
  }

  const tabs = {
    Checkout: (redirect: any) => {
      if (cart.length === 0) {
        return (
          <div className='Cart-checkout-tab'>
            <p>{'Your cart is empty'}</p>
          </div>
        )
      }

      return (
        <div className='Cart-checkout-tab'>
          <Container>
            {cart.map((item: any) => (
              <Row key={item.name}>
                <Col sm='2' style={{ textAlign: 'right' }}>
                  {item.quantity}
                </Col>
                <Col sm='6' style={{ textAlign: 'right' }}>
                  <p>{item.name}</p>
                </Col>
                <Col sm='3' style={{ textAlign: 'left' }}>
                  <p>
                    <span>{'$'}</span>
                    {(item.unitprice * item.quantity).toFixed(2)}
                    <span style={{ float: 'right', paddingLeft: 20 }}>
                      <Button
                        onClick={() => removeFromCart(item.name)}
                        size='sm'
                        outline
                        color='danger'>
                        {'X'}
                      </Button>
                    </span>
                  </p>
                </Col>
              </Row>
            ))}
            <Row>
              <Col sm='2' style={{ textAlign: 'right' }}>
                <div>
                  <p>{'#'}</p>
                </div>
              </Col>
              <Col sm='6' style={{ textAlign: 'right' }}>
                <div>
                  <hr />
                  <p>{'Subtotal:'}</p>
                </div>
              </Col>
              <Col sm='3' style={{ textAlign: 'left' }}>
                <div>
                  <hr />
                  <p>
                    <span>{'$'}</span>
                    {subtotal.toFixed(2)}
                  </p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col sm='2' style={{ textAlign: 'right' }}>
                <div />
              </Col>
              <Col sm='6' style={{ textAlign: 'right' }}>
                <div>
                  <p>{'Sales Tax:'}</p>
                </div>
              </Col>
              <Col sm='3' style={{ textAlign: 'left' }}>
                <div>
                  <p>
                    <span>{'$'}</span>
                    {salesTax.toFixed(2)}
                  </p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col sm='2' style={{ textAlign: 'right' }}>
                <div />
              </Col>
              <Col sm='6' style={{ textAlign: 'right' }}>
                <div>
                  <hr />
                  <strong>{'Total:'}</strong>
                </div>
              </Col>
              <Col sm='3' style={{ textAlign: 'left' }}>
                <div>
                  <hr />
                  <strong>
                    <span>{'$'}</span>
                    {(subtotal + salesTax).toFixed(2)}
                  </strong>
                </div>
              </Col>
            </Row>
            <div style={{ paddingBottom: 20 }} />
            <Button color='primary' size='lg' onClick={() => redirect(1)} block>
              {'Continue to Delivery'}
            </Button>
          </Container>
        </div>
      )
    },

    Delivery: (redirect: any) => {
      return (
        <div className='Cart-checkout-tab'>
          <Container>
            <Card>
              <CardHeader>
                <h5>{'Delivery Address'}</h5>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col>
                    <InputGroup>
                      <InputGroupText>{'First Name'}</InputGroupText>
                      <Input
                        name='firstName'
                        type='text'
                        value={delivery.firstName}
                        onChange={deliveryUpdate}
                      />
                    </InputGroup>
                  </Col>
                  <Col>
                    <InputGroup>
                      <InputGroupText>{'Last Name'}</InputGroupText>
                      <Input
                        name='lastName'
                        type='text'
                        value={delivery.lastName}
                        onChange={deliveryUpdate}
                      />
                    </InputGroup>
                  </Col>
                </Row>
                <div style={{ paddingBottom: 15 }} />
                <InputGroup>
                  <InputGroupText>{'Company'}</InputGroupText>
                  <Input
                    name='company'
                    type='text'
                    value={delivery.company}
                    onChange={deliveryUpdate}
                  />
                </InputGroup>
                <div style={{ paddingBottom: 15 }} />
                <InputGroup>
                  <InputGroupText>{'Address Line 1'}</InputGroupText>
                  <Input
                    name='addrLine1'
                    type='text'
                    value={delivery.addrLine1}
                    onChange={deliveryUpdate}
                  />
                </InputGroup>
                <div style={{ paddingBottom: 15 }} />
                <InputGroup>
                  <InputGroupText>{'Address Line 2'}</InputGroupText>
                  <Input
                    name='addrLine2'
                    type='text'
                    value={delivery.addrLine2}
                    onChange={deliveryUpdate}
                  />
                </InputGroup>
                <div style={{ paddingBottom: 15 }} />
                <InputGroup>
                  <InputGroupText>{'Email'}</InputGroupText>
                  <Input
                    name='email'
                    type='email'
                    value={delivery.email}
                    onChange={deliveryUpdate}
                  />
                </InputGroup>
                <div style={{ paddingBottom: 15 }} />
                <InputGroup>
                  <InputGroupText>{'Phone'}</InputGroupText>
                  <Input
                    name='phone'
                    type='tel'
                    value={delivery.phone}
                    onChange={deliveryUpdate}
                  />
                </InputGroup>
                <div style={{ paddingBottom: 15 }} />
                <InputGroup>
                  <Input
                    type='checkbox'
                    name='saveInfo'
                    checked={saveAddrInfo}
                    onClick={() => setSaveAddrInfoState(!saveAddrInfo)}
                  />
                  <span style={{ paddingLeft: 10 }}>
                    <Label>{'Save Address Information'}</Label>
                  </span>
                </InputGroup>
              </CardBody>
            </Card>
          </Container>
          <div style={{ paddingBottom: 20 }} />
          <Container>
            <Row>
              <Col>
                <Button
                  color='secondary'
                  size='lg'
                  onClick={() => redirect(0)}
                  block>
                  {'Return to Cart'}
                </Button>
              </Col>
              <Col>
                <Button
                  color='primary'
                  size='lg'
                  onClick={() => reviewOrder(redirect)}
                  block>
                  {'Review Order'}
                </Button>
              </Col>
            </Row>
          </Container>
        </div>
      )
    },

    'Place Order': (redirect: any) => {
      return (
        <div className='Cart-checkout-tab'>
          <Container>
            {cart.map((item: any) => (
              <Row key={item.name}>
                <Col sm='2' style={{ textAlign: 'right' }}>
                  {item.quantity}
                </Col>
                <Col sm='6' style={{ textAlign: 'right' }}>
                  <p>{item.name}</p>
                </Col>
                <Col sm='3' style={{ textAlign: 'left' }}>
                  <p>
                    <span>{'$'}</span>
                    {(item.unitprice * item.quantity).toFixed(2)}
                  </p>
                </Col>
              </Row>
            ))}
            <Row>
              <Col sm='2' style={{ textAlign: 'right' }}>
                <div>
                  <p>{'#'}</p>
                </div>
              </Col>
              <Col sm='6' style={{ textAlign: 'right' }}>
                <div>
                  <hr />
                  <p>{'Subtotal:'}</p>
                </div>
              </Col>
              <Col sm='3' style={{ textAlign: 'left' }}>
                <div>
                  <hr />
                  <p>
                    <span>{'$'}</span>
                    {subtotal.toFixed(2)}
                  </p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col sm='2' style={{ textAlign: 'right' }}>
                <div />
              </Col>
              <Col sm='6' style={{ textAlign: 'right' }}>
                <div>
                  <p>{'Sales Tax:'}</p>
                </div>
              </Col>
              <Col sm='3' style={{ textAlign: 'left' }}>
                <div>
                  <p>
                    <span>{'$'}</span>
                    {salesTax.toFixed(2)}
                  </p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col sm='2' style={{ textAlign: 'right' }}>
                <div />
              </Col>
              <Col sm='6' style={{ textAlign: 'right' }}>
                <div>
                  <hr />
                  <strong>{'Total:'}</strong>
                </div>
              </Col>
              <Col sm='3' style={{ textAlign: 'left' }}>
                <div>
                  <hr />
                  <strong>
                    <span>{'$'}</span>
                    {(subtotal + salesTax).toFixed(2)}
                  </strong>
                </div>
              </Col>
            </Row>
            <div style={{ paddingBottom: 20 }} />
            <Row>
              <Col>
                <Button
                  color='secondary'
                  size='lg'
                  onClick={() => redirect(1)}
                  block>
                  {'Return to Delivery'}
                </Button>
              </Col>
              <Col>
                <Button
                  color='primary'
                  size='lg'
                  onClick={() => console.log('the displays')}
                  block>
                  {'Submit Order Request'}
                </Button>
              </Col>
            </Row>
          </Container>
        </div>
      )
    },
  }

  return (
    <div className='Cart-page'>
      <TabGroup canClick={false} tabs={tabs} />
    </div>
  )
}

export default CartPage
