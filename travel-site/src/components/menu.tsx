import React from 'react'

import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import BasketImage from './basket-image'
import { Cart } from '../models/cart'
import CartData from '../hooks/cart-data'

const Menu = ({open}) => {
  const cart: Cart = CartData();

  return (
    <div className={`menu lg:relative lg:visible lg:opacity-100 ${open ? 'open' : ''}`}>
      <ul className='lg:flex lg:items-center m-0 p-5 left-0 right-0 list-none absolute lg:relative lg:flex-row lg:flex lg:p-0'>
          <li className='pr-3 lg:pr-10 mb-0 pb-26 lg:pb-0 border-bottom-gray lg:border-transparent'>
              <Link className='focus:outline-black' to="/experiences/">Experiences</Link>
          </li>
          <li className='pr-3 lg:pr-10 mb-0 py-26 lg:py-0 border-bottom-gray lg:border-transparent'>
              <Link className='focus:outline-black' to="/company/">Company</Link>
          </li>
          <li className='pr-3 lg:pr-10 mb-0 py-26 lg:py-0 border-bottom-gray lg:border-transparent'>
              <Link className='focus:outline-black' to="/support/">Support</Link>
          </li>
          <li className='mb-0 pt-26 lg:pt-0'>
              <Link className={`bookings ${Object.keys(cart).length > 0 ? 'active' : ''} flex justify-between items-center relative focus:outline-black`} to="/bookings/">
                <span className='lg:hidden'>Bookings</span>
                <BasketImage/>
              </Link>
          </li>
      </ul>
    </div>
  );
}

Menu.propTypes = {
  open: PropTypes.bool,
}

Menu.defaultProps = {
  open: false,
}

export default Menu
