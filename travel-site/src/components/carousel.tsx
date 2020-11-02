import React from 'react'
import { Destination } from '../models/destination'
import BookButton from './book-button'

const Carousel = ({items}: Destination[]) => {
  return (
    <div className='w-screen pl-5 py-6 bg-gray-efed'>
      <h2 className='carousel-title pb-3 text-dark-222 lg:text-center'>
        Adventure awaits out there
      </h2>
      <p className='carousel-subtitle mb-10 text-dark-222 lg:text-center'>
        Get out and expreience Scandinavian way of living
      </p>

      <ul className='m-0 p-0 list-none flex overflow-x-scroll'>
        {items.map((data: Destination) => (
          <li key={data.id} className='pr-5'>
            <div className='bg-black width-275 width-285'>
              <img style={{width: '100%'}} src={data.media['small'].url}/>
              <div className='p-5'>
                <h5 className='item-title pt-4 pb-2 text-white'>{data.title}</h5>
                <p className='item-cost mb-5 py-1 text-white'>
                  {`${data.guidedTour ? 'Guided tours from' : 'From'} ${data.price.currencyCode === 'GBP' ? '£' : ''}${data.price.value} ${data.price.unit}`}
                </p>
                <BookButton full={true} id={data.id} variant='white'/>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Carousel
