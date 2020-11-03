import { navigate } from 'gatsby';
import React, { useState } from 'react'
import Menu from './menu'
import PropTypes from 'prop-types'

const Navigation = ({ goesBack }) => {
  const [open, setOpen] = useState(goesBack);

  return (
    <>
      <button className={`p-1 focus:outline-black ${goesBack ? '' : 'lg:hidden'}`}
              onClick={() => goesBack ? navigate('/') : setOpen(!open)}>
        <div id="nav-icon4"
             className={open || goesBack ? 'open' : ''}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
      { goesBack ? null : <Menu open={open}/> }
    </>
  )
}

Navigation.propTypes = {
  goesBack: PropTypes.bool,
}

Navigation.defaultProps = {
  goesBack: true,
}

export default Navigation
