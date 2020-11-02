import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const DetailsPage = ({ location }) => {
  console.log('>> pageId: ', location.state.pageId);
  return (
    <Layout>
      <SEO title="Details page"/>
      <h1>Hi from the Details page</h1>
      <p>Welcome to Details page</p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default DetailsPage
