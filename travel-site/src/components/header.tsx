import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import Navigation from './navigation'

const Header = ({siteTitle, goesBack}) => (
  <header className='bg-white fixed w-full z-50'>
    <div className='my-0 mx-auto py-6 px-5 justify-between flex items-center h-full'
         style={{maxWidth: 1280}}>
      <h3 className='m-0 inline-flex'>
        <Link to="/" className='text-black no-underline focus:outline-black'>{siteTitle}</Link>
      </h3>

      <Navigation goesBack={goesBack}/>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  goesBack: PropTypes.bool,
}

Header.defaultProps = {
  siteTitle: '',
  goesBack: true,
}

export default Header
