import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { Cart, CartItem } from '../models/cart'

const BookingsPage = () => {
  const cart: Cart = JSON.parse(localStorage.getItem('cart') || '{}');

  let grandTotal = 0;
  let generalCurrency;
  const cartContent = Object.keys(cart).map(id => {
    const item: CartItem = cart[id];
    grandTotal += item.price * (item.adults + item.children);
    generalCurrency = item.currency;

    return (
      <li key={item.id}>
        <p className='font-bold mt-4'>{item.id}</p>
        <p>Adults: {item.adults}</p>
        <p>Children: {item.children}</p>
        <p>Cost: {item.currency}{item.price * (item.adults + item.children)}</p>
      </li>
    );
  });

  return (
    <Layout>
      <SEO title="BookingsPage"/>
      <div className='px-5'>
        <h1>Bookings</h1>

        <ul className='m-0 p-0 list-none'>
          { cartContent}
          <li>
            <p className='font-bold mt-4'>Total: {generalCurrency}{grandTotal}</p>
          </li>
        </ul>

        <Link className='mt-8' to="/">Go back to the homepage</Link>
      </div>
    </Layout>
  )
}

export default BookingsPage
