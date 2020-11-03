import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { Destinations } from '../models/destinations'
import BookTicket from '../components/book-ticket'
import ReactMarkdown from 'react-markdown'
import useWindowSize from '../hooks/window-size'
import { navigate } from 'gatsby'

const DetailsPage = ({location}) => {
  const data = Destinations.find(location?.state?.pageId,
    location?.state?.featured)

  if (!data && typeof window !== 'undefined') {
    navigate('/')
  }

  const body = data?.body?.split('\n').join('\n\n')
  const windowSize: { width?: number, height?: number } = useWindowSize()

  return (
    <Layout>
      <SEO title="Details page"/>
      <div className='lg:flex w-full lg:flex-wrap lg:px-5'>
        <div className='image-holder lg:w-9/12'>
          <img style={{
            width: `${windowSize?.width}px`,
            height: `${windowSize?.width}px`,
          }} className='block sm:hidden' src={data?.media['small']?.url}/>
          <img className='hidden sm:block w-full' src={data?.media['large']?.url}/>
        </div>

        <div className='lg:w-3/12'>
          <div className='pt-6 px-4 lg:pt-0'>
            <h2 className='featured-title pb-3 text-black'>{data?.title}</h2>
            <p
              className='featured-cost pb-4 text-black'>{`From ${data?.price?.currencyCode ===
            'GBP' ? '£' : ''}${data?.price?.value} ${data?.price?.unit}`}</p>
          </div>

          <BookTicket id={location?.state?.pageId}
                      featured={location?.state?.featured}
                      price={data?.price?.value}
                      currency={data?.price?.currencyCode === 'GBP' ? '£' : ''}/>
        </div>

        <div className='pt-4 mb-6 px-4 lg:w-8/12'>
          <ReactMarkdown children={body}/>
        </div>
      </div>
    </Layout>
  )
}

export default DetailsPage
