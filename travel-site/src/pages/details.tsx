import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { Destinations } from '../models/destinations'
import BookTicket from '../components/book-ticket'
import ReactMarkdown from 'react-markdown'
import isMobile from '../utils/mobile'

const DetailsPage = ({ location }) => {
  const data = Destinations.find(location.state.pageId, location.state.featured);
  const body = data?.body?.split('\n').join('\n\n');

  const mobile: boolean = isMobile();
  console.log('>> window.innerWidth: ', window.innerWidth, mobile);

  return (
    <Layout goesBack={true}>
      <SEO title="Details page"/>

      <div className='image-holder -mx-5'style={{
        background: 'url(' + data.media[mobile ? 'small' : 'large'].url + ') 50% 50% no-repeat',
        backgroundSize: 'cover',
        width: '100vw',
        height: '100vh',
        maxWidth: 960,
      }}>
      </div>

      {/*<div className='w-screen' style={{margin: `0 -1.0875rem`}}>*/}
      {/*  <img src={data.media['small'].url} />*/}
      {/*</div>*/}
      <div className='pt-6 px-4'>
        <h2 className='featured-title pb-3 text-black'>{ data.title }</h2>
        <p className='featured-cost pb-4 text-black'>{`From ${data.price.currencyCode === 'GBP' ? '£' : ''}${data.price.value} ${data.price.unit}`}</p>
      </div>

      <BookTicket id={location.state.pageId} featured={location.state.featured} />

      {/*<div className='pt-8'>*/}
      {/*  <p>{ data?.body }</p>*/}
      {/*</div>*/}

      {/*<div*/}
      {/*  className="blog-post-content"*/}
      {/*  dangerouslySetInnerHTML={{ __html: data?.body }}*/}
      {/*/>*/}

      <ReactMarkdown children={body} />
    </Layout>
  )
}

export default DetailsPage
