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
    this.setState({open: !this.state.open});
  }

  render () {
    return (
      <>
        <button className='px-1 outline-black' onClick={() => this.toggle()}>
          <div id="nav-icon4" className={this.state.open ? 'open' : ''}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>

        <Menu open={this.state.open} />
      </>
    )
  }
}

export default Navigation
