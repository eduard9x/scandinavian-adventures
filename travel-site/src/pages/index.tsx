import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import JSONData from '../data/data.json'
import Hero from '../components/hero'
import Featured from '../components/featured'
import Carousel from '../components/carousel'

const IndexPage = () => (
  <Layout>
    <SEO title="Home"/>

    <Hero data={JSONData.featured[0]} />

    <Featured data={JSONData.featured[1]} />

    <Featured data={JSONData.featured[2]} />

    <Carousel items={JSONData.carousel.items}/>
  </Layout>
)

export default IndexPage
