import React from 'react'

import { Link } from 'gatsby'

const Menu = ({open}) => (
  <div className={`menu ${open ? 'open' : ''}`}>
      <ul className='m-0 p-0 list-none'>
          <li className='pr-3 mb-0'>
              <Link to="/experiences/">Experiences</Link>
          </li>
          <li className='pr-3 mb-0'>
              <Link to="/company/">Company</Link>
          </li>
          <li className='pr-3 mb-0'>
              <Link to="/support/">Support</Link>
          </li>
          <li className='mb-0'>
              <Link to="/cart/">Cart</Link>
          </li>
      </ul>
  </div>
)

export default Menu
