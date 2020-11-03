import React from 'react'
import Menu from './menu'

class Navigation extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      open: false,
    }
  }

  toggle () {
    if (this.state.open) {
      document.body.classList.remove('overflow-hidden')
    } else {
      document.body.classList.add('overflow-hidden')
    }
    this.setState({open: !this.state.open})
  }

  render () {
    return (
      <>
        <button className='p-1 focus:outline-black lg:hidden'
                onClick={() => this.toggle()}>
          <div id="nav-icon4"
               className={this.state.open ? 'open' : ''}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>

        <Menu open={this.state.open}/>
      </>
    )
  }
}

export default Navigation
