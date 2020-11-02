import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import Navigation from './navigation'

const Header = ({siteTitle}) => (
  <header className='bg-white'>
    <div className='my-0 mx-auto py-6 px-5 justify-between flex items-center h-full'
         style={{maxWidth: 960}}>
      <h3 className='m-0 inline-flex'>
        <Link to="/" className='text-black no-underline focus:outline-black'>{siteTitle}</Link>
      </h3>

      <Navigation/>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
