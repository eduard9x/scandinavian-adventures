import React from 'react'
import PropTypes from 'prop-types'
import { navigate } from 'gatsby'
import BookButton from './book-button'

const BookTicket = ({id, title, variant, featured}) => {
  return (
    <div className='pt-4 mb-6'>
      <span>Adults</span>

      +/-

      <span>Children</span>

      +/-

      <BookButton id={id} featured={featured} />
    </div>
  )
}

BookTicket.propTypes = {
  id: PropTypes.string,
  variant: PropTypes.string,
  title: PropTypes.string,
  featured: PropTypes.bool,
}

BookTicket.defaultProps = {
  id: '',
  variant: 'black',
  title: 'Book experience',
  featured: false,
}

export default BookTicket
