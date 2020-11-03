import React from 'react'
import PropTypes from 'prop-types'
import { graphql, useStaticQuery } from 'gatsby'

import Header from './header'

const Layout = ({children, goesBack}) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`}
              goesBack={goesBack}/>
      <div className='my-0 mx-auto' style={{maxWidth: 1280}}>
        <main className='pt-20'>{children}</main>
        <footer className='py-12' />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  goesBack: PropTypes.bool,
}

Layout.defaultProps = {
  goesBack: true,
}

export default Layout
