import React from 'react'
import { Destination } from '../models/destination'
import BookButton from './book-button'
import isMobile from '../utils/mobile'
import ReactMarkdown from 'react-markdown'

const Featured = ({data}: Destination) => {
  const mobile: boolean = isMobile();
  const body = data?.body?.split('\n').join('\n\n');
  console.log('>> window.innerWidth: ', window.innerWidth, mobile);

  return (
    <div className='w-full my-10'>
      <div className='image-holder relative'>
        <img style={{ width: '100%', }} src={data.media[mobile ? 'small' : 'large'].url}/>
        <div className='absolute flex flex-col top-0 right-0 bottom-0 left-0 justify-end px-5'>
          <h2 className='featured-title pb-4 text-white'>{data.title}</h2>
        </div>
      </div>
      <div className='pt-4 ml-5'>
        <ReactMarkdown children={ body } />

        <p className='featured-cost pb-4 text-black pt-8'>
          {`From ${data.price.currencyCode === 'GBP' ? '£' : ''}${data.price.value} ${data.price.unit}`}
        </p>
      </div>
      <div className='mt-4 pt-5'>
        <BookButton full={true} id={data.id} featured={true}/>
      </div>
    </div>
  )
}

export default Featured
