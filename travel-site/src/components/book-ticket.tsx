import React from 'react'
import BookButton from './book-button'

class BookTicket extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      adults: 10,
      children: 22,
    }
  }

  changeTickets(key: string, newValue: string) {
    const safeInt = parseInt(newValue, 10);
    if (key === 'adults') {
      this.setState({ adults: safeInt });
    } else {
      this.setState({ children: safeInt });
    }
  }

  render () {
    const audience = [
      {title: 'Adults', key: 'adults'},
      {title: 'Children', key: 'children'},
    ];

    return (
      <div className='pt-4 mb-6 px-4'>
        {audience.map(item => (
          <div className='mb-4' key={item.key}>
            <span className='ticket-audience text-dark-222'>{item.title}</span>
            <div className='flex items-center'>
              <button className='h-10 w-10 bg-black flex items-center justify-center' onClick={() => this.changeTickets(item.key, this.state[item.key] - 1)}>
                <span className='minus w-5 bg-white'></span>
              </button>
              <input type='text' className='h-10 w-20 mx-3 text-center border border-black border-solid' value={this.state[item.key]} onChange={e => this.changeTickets(item.key, e.target.value)}/>
              <button className='h-10 w-10 bg-black flex items-center justify-center' onClick={() => this.changeTickets(item.key, this.state[item.key] + 1)}>
                <span className='plus w-5 bg-white flex justify-center'></span>
              </button>
            </div>
          </div>
        ))}
        <BookButton id={this.props.id} featured={this.props.featured}/>
      </div>
    )
  }
}

export default BookTicket
