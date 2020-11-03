import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import JSONData from '../data/data.json'
import Hero from '../components/hero'
import Featured from '../components/featured'
import Carousel from '../components/carousel'

const IndexPage = () => (
  <Layout goesBack={false}>
    <SEO title="Home"/>

    <Hero data={JSONData.featured[0]}/>

    <div className='md:flex px-5'>
      <Featured key={JSONData.featured[1].id} first={true} className='md:pr-3' data={JSONData.featured[1]}/>
      <Featured key={JSONData.featured[2].id} className='md:pl-3' data={JSONData.featured[2]}/>
    </div>

    <Carousel items={JSONData.carousel.items}/>
  </Layout>
)

export default IndexPage
