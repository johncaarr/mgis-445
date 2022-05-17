/**
 * @author John Carr <jxc9224@rit.edu>
 * @license MIT
 */

import { Col, Row } from 'reactstrap'

import en from '../../i18n/en.json'
import ProductCard from './components/ProductCard'

export interface ProductsPageProps {
  redirect: any
}

export const ProductsPage = (props: ProductsPageProps) => {
  return (
    <div className='Products-page'>
      <Row xs={1} md={3} className='g-4'>
        {en.products.map((product: any) => (
          <Col key={product.name}>
            <ProductCard
              name={product.name}
              redirect={props.redirect}
              description={product.description}
              unitprice={product.unitprice}
            />
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default ProductsPage
