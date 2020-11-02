import React from 'react'
import { Destination } from '../models/destination'
import BookButton from './book-button'
import isMobile from '../utils/mobile'

const Hero = ({data}: Destination) => {
  const mobile: boolean = isMobile();

  return (
    <div className='w-screen relative md:w-full md:mx-0'>
      <div className='image-holder' style={{
        // background: 'url(' + data.media['large'].url + ') 50% 50% no-repeat',
        // width: '100vw',
        // height: '100vh',
        // backgroundSize: 'cover',
        // maxWidth: 960,
      }}>
        <img style={{ width: '100%', }} src={data.media[mobile ? 'small' : 'large'].url}/>
      </div>
      <div
        className='absolute flex flex-col top-0 right-0 bottom-0 left-0 justify-center p-5'>
        <h2 className='featured-title pb-3 text-white'>{data.title}</h2>
        <p
          className='featured-cost pb-4 text-white'>{`From ${data.price.currencyCode ===
        'GBP' ? '£' : ''}${data.price.value} ${data.price.unit}`}</p>
        <div>
          <BookButton id={data.id} variant='white' featured={true}/>
        </div>
      </div>
    </div>
  )
}

export default Hero
