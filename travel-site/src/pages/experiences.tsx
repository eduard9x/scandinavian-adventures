import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const ExperiencesPage = () => {
  return (
    <Layout>
      <SEO title="Experiences page"/>
      <h1>Hi from the Experiences page</h1>
      <p>Welcome to Experiences page</p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default ExperiencesPage
