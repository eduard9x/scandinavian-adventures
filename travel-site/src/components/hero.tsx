import React from 'react'
import { Destination } from '../models/destination'
import BookButton from './book-button'

const Hero = ({data}: Destination) => (
  <div className='w-screen relative' style={{
    margin: `0 -1.0875rem`,
  }}>
    <img src={data.media['small'].url} />
    <div className='absolute flex flex-col top-0 right-0 bottom-0 left-0 justify-center p-5'>
      <h2 className='featured-title pb-3 text-white'>{ data.title }</h2>
      <p className='featured-cost pb-4 text-white'>{`From ${data.price.currencyCode === 'GBP' ? '£' : ''}${data.price.value} ${data.price.unit}`}</p>
      <div>
        <BookButton id={data.id} variant='white' />
      </div>
    </div>
  </div>
)

export default Hero
