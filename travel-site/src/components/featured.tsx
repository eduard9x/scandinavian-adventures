import React from 'react'
import BookButton from './book-button'
import isMobile from '../utils/mobile'
import ReactMarkdown from 'react-markdown'
import PropTypes from 'prop-types'

const Featured = ({data, first}) => {
  const mobile: boolean = isMobile();
  const body = data?.body?.split('\n').join('\n\n');

  return (
    <div className={`featured ${first ? 'featured-first' : 'featured-second'} w-full my-10`}>
      <div className='image-holder relative'>
        <img className='same-height' style={{ width: '100%' }} src={data.media[mobile ? 'small' : 'large'].url}/>
        <div className='absolute flex flex-col top-0 right-0 bottom-0 left-0 justify-end px-5 md:p-3'>
          <h2 className='featured-title pb-4 text-white md:p-4'>{data.title}</h2>
        </div>
      </div>
      <div className='pt-4 ml-5'>
        <ReactMarkdown children={ body } />
      </div>
      <div className='pt-4 ml-5 mt-auto'>
        <p className='featured-cost pb-4 text-black pt-8'>
          {`From ${data.price.currencyCode === 'GBP' ? '£' : ''}${data.price.value} ${data.price.unit}`}
        </p>
      </div>
      <div className='pt-5 md:ml-5'>
        <BookButton id={data.id} featured={true}/>
      </div>
    </div>
  )
}

Featured.propTypes = {
  data: PropTypes.string,
  first: PropTypes.bool,
}

Featured.defaultProps = {
  data: {},
  first: true,
}

export default Featured
