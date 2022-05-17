/**
 * @author John Carr <jxc9224@rit.edu>
 * @license MIT
 */

import { useSelector } from 'react-redux'

import './App.css'
import en from './i18n/en.json'

import CartPage from './pages/Cart/CartPage'
import HomePage from './pages/Home/HomePage'
import ProductsPage from './pages/Products/ProductsPage'

import TabGroup from './components/Tab/TabGroup'

export const App = () => {
  // accesses cartStore from './stores/cart'
  const cartSize: number = useSelector((state: any) => state.cart.items).length

  const tabs: any = {
    [en.home_tab_title]: (redirect: any) => {
      return <HomePage />
    },
    [en.products_tab_title]: (redirect: any) => {
      return <ProductsPage redirect={redirect} />
    },
    [`${en.cart_tab_title} (${cartSize})`]: (redirect: any) => {
      return <CartPage redirect={redirect} />
    },
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <h2 style={{ paddingTop: 35, paddingBottom: 15 }}>{en.page_title}</h2>
      </header>
      <div className='App-body'>
        <TabGroup canClick={true} tabs={tabs} />
      </div>
      <footer className='App-footer'>
        <a href='https://github.com/saunders-cz/midterm-exam-jxc9224'>
          <h6 style={{ paddingBottom: 15 }}>{'midterm-exam-jxc9224'}</h6>
        </a>
      </footer>
    </div>
  )
}

export default App

