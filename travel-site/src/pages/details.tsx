import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { Destinations } from '../models/destinations'
import BookTicket from '../components/book-ticket'

const DetailsPage = ({ location }) => {
  const data = Destinations.find(location.state.pageId, location.state.featured);
  return (
    <Layout goesBack={true}>
      <SEO title="Details page"/>

      <div className='w-screen' style={{margin: `0 -1.0875rem`}}>
        <img src={data.media['small'].url} />
      </div>
      <div className='pt-6 px-4'>
        <h2 className='featured-title pb-3 text-black'>{ data.title }</h2>
        <p className='featured-cost pb-4 text-black'>{`From ${data.price.currencyCode === 'GBP' ? '£' : ''}${data.price.value} ${data.price.unit}`}</p>
      </div>

      <BookTicket id={location.state.pageId} featured={location.state.featured} />

      <div className='pt-8'>
        <p>{ data?.body }</p>
      </div>

      {/*<div*/}
      {/*  className="blog-post-content"*/}
      {/*  dangerouslySetInnerHTML={{ __html: data?.body }}*/}
      {/*/>*/}
    </Layout>
  )
}

export default DetailsPage
