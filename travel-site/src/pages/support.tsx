import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const SupportPage = () => {
  return (
    <Layout>
      <SEO title="Support page"/>
      <h1>Hi from the Support page</h1>
      <p>Welcome to Support page</p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default SupportPage
