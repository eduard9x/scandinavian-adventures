import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const ExperiencesPage = () => {
  return (
    <Layout>
      <SEO title="Experiences page"/>
      <div className='px-5'>
        <h1 className='mt-8'>Hi from the Experiences page</h1>
        <p>Welcome to Experiences page</p>
        <Link className='mt-8' to="/">Go back to the homepage</Link>
      </div>
    </Layout>
  )
}

export default ExperiencesPage
