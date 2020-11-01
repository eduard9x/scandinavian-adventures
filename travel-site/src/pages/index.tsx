import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home"/>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    {/*<p>{`${process.env.GATSBY_API_URL}/another-thing`}</p>*/}
    <div style={{maxWidth: `300px`, marginBottom: `1.45rem`}}>
      <Image/>
    </div>
    <Link to="/details/">Go to details page</Link> <br/>

    <ul>
      <li className='py-64'></li>
      <li className='py-64'></li>
      <li className='py-64'></li>
      <li className='py-64'></li>
      <li className='py-64'></li>
    </ul>

    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
