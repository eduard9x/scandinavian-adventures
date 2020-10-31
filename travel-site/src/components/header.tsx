import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `white`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        justifyContent: 'space-between',
        display: 'flex'
      }}
    >
      <h3 style={{
        margin: 0,
        display: 'inline-flex'
      }}>
        <Link
          to="/"
          style={{
            color: `black`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h3>

      <ul style={{
        margin: 0,
        padding: 0,
        listStyleType: 'none',
        display: 'inline-flex'
      }}>
        <li className='pr-3 mb-0'>Experiences</li>
        <li className='pr-3 mb-0'>Company</li>
        <li className='pr-3 mb-0'>Support</li>
        <li className='mb-0'>Cart</li>
      </ul>
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
