import React from 'react'
import BookButton from './book-button'
import { Cart, CartItem } from '../models/cart'
import { navigate } from 'gatsby'
import { Ticket } from '../models/ticket'

class BookTicket extends React.Component<Ticket> {
  constructor (props: Ticket) {
    super(props)
    this.state = {
      adults: 1,
      children: 0,
    }

    if (!props.id) {
      navigate('/')
    }
    const cart = JSON.parse(localStorage.getItem('cart') || '{}')
    if (cart[props.id]) {
      this.state = {
        adults: cart[props.id].adults,
        children: cart[props.id].children,
      }
    }
    this.saveItems = this.saveItems.bind(this)
  }

  saveItems = () => {
    const cart: Cart = JSON.parse(localStorage.getItem('cart') || '{}')
    cart[this.props.id] = {
      id: this.props.id,
      adults: this.state.adults,
      children: this.state.children,
      currency: this.props.currency,
      price: this.props.price,
    } as CartItem
    localStorage.setItem('cart', JSON.stringify(cart))
    window.dispatchEvent(new Event('cart'))
  }

  changeTickets = (key: string, newValue: string) => {
    const safeInt = parseInt(newValue, 10)
    if (safeInt < 0) {
      return
    }
    if (key === 'adults') {
      this.setState({adults: safeInt})
    } else {
      this.setState({children: safeInt})
    }
  }

  render () {
    const audience = [
      {title: 'Adults', key: 'adults'},
      {title: 'Children', key: 'children'},
    ]

    return (
      <div className='pt-4 mb-6 px-4'>
        {audience.map(item => (
          <div className='mb-4' key={item.key}>
            <span className='ticket-audience text-dark-222'>{item.title}</span>
            <div className='flex items-center'>
              <button
                className='h-10 w-10 bg-black flex items-center justify-center'
                onClick={() => this.changeTickets(item.key,
                  this.state[item.key] - 1)}>
                <span className='minus w-5 bg-white'></span>
              </button>
              <input type='text'
                     className='h-10 w-20 mx-3 text-center border border-black border-solid'
                     value={this.state[item.key]}
                     onChange={e => this.changeTickets(item.key,
                       e.target.value)}/>
              <button
                className='h-10 w-10 bg-black flex items-center justify-center'
                onClick={() => this.changeTickets(item.key,
                  this.state[item.key] + 1)}>
                <span className='plus w-5 bg-white flex justify-center'></span>
              </button>
            </div>
          </div>
        ))}

        <p
          className='ticket-audience text-dark-222 font-bold mb-8 mt-12 pt-2'>Total {this.props.currency}{this.props.price *
        (this.state.adults + this.state.children)}</p>

        <BookButton id={this.props.id} featured={this.props.featured}
                    callback={this.saveItems}/>
      </div>
    )
  }
}

export default BookTicket
