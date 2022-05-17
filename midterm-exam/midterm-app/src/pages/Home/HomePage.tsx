/**
 * @author John Carr <jxc9224@rit.edu>
 * @license MIT
 */

export interface HomePageProps {}

export const HomePage = (props: HomePageProps) => {
  return (
    <div className='Home-page'>
      <h3>Welcome!</h3>
      <p>
        Here at John's Jackfruit, we are committed to providing you with the
        best prices for bulk organic Jackfruit
      </p>
      <p>Please take a look at our selection under the 'Products' tab</p>
      <p>
        When you're ready to place an order, go to the 'Cart' tab to proceed
        with payment
      </p>
      <h4>Thanks for visiting!</h4>
      <div style={{ paddingBottom: 25 }} />
      <img
        alt='Clipart of jackfruit'
        src='jackfruit.png'
        height={300}
        width={300}
      />
    </div>
  )
}

export default HomePage
