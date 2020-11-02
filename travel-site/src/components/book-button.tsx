import React from 'react'
import PropTypes from 'prop-types'
import { navigate } from 'gatsby'

const BookButton = ({id, title, variant, featured, full}) => {
  return (
    <>
      <button className={`book-button p-5 ${full ? 'w-full' : ''}`}
              onClick={() => navigate(`/details`, {
                state: {
                  pageId: id,
                  featured,
                },
              })}
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
  featured: PropTypes.bool,
  full: PropTypes.bool,
}

BookButton.defaultProps = {
  id: '',
  variant: 'black',
  title: 'Book experience',
  featured: false,
  full: false,
}

export default BookButton
