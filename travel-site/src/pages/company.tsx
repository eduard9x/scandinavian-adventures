import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const CompanyPage = () => {
  return (
    <Layout>
      <SEO title="Company page"/>
      <h1>Hi from the company page</h1>
      <p>Welcome to company page</p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default CompanyPage
