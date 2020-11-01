import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const CartPage = () => {
  return (
    <Layout>
      <SEO title="CartPage"/>
      <h1>Hi from the Cart page</h1>
      <p>Welcome to your cart</p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default CartPage
