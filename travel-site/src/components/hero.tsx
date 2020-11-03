import React from 'react'
import { Destination } from '../models/destination'
import BookButton from './book-button'
import PropTypes from 'prop-types'

const Hero = ({data}: Destination) => (
  <div className='w-screen relative md:w-full md:mx-0'>
    <div className='image-holder'>
      <img className='block sm:hidden w-full' src={data.media['small'].url}/>
      <img className='hidden sm:block w-full' src={data.media['large'].url}/>
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

Hero.propTypes = {
  data: PropTypes.object,
}

Hero.defaultProps = {
  data: {},
}

export default Hero
