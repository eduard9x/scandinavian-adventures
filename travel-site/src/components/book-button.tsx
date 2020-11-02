import React from 'react'
import PropTypes from 'prop-types'
import { navigate } from 'gatsby'

const BookButton = ({id, title, variant}) => {
  return (
    <>
      <button className='book-button p-5'
              onClick={() => navigate(`/details`, {state: {pageId: id}})}
              style={{
                backgroundColor: variant,
                color: variant === 'black' ? 'white' : 'black',
              }}>
        {title}
      </button>
    </>
  )
}

BookButton.propTypes = {
  id: PropTypes.string,
  variant: PropTypes.string,
  title: PropTypes.string,
}

BookButton.defaultProps = {
  id: '',
  variant: 'black',
  title: 'Book experience',
}

export default BookButton
