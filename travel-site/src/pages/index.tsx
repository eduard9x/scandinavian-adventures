import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import '../style/style.scss'

const IndexPage = () => (
  <Layout>
    <SEO title="Home"/>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <p>{`${process.env.GATSBY_API_URL}/another-thing`}</p>
    <div style={{maxWidth: `300px`, marginBottom: `1.45rem`}}>
      <Image/>
    </div>
    <Link to="/details/">Go to details page</Link> <br/>
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
