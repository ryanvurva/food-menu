import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Navbar extends Component {
  render () {
    return <nav>
      <div className='Title'>
        <NavLink to='/'><h1>BIS<span>T</span>RO</h1></NavLink>
        <p>-Braavos-</p>
      </div>
      <div className='Nav'>
        <NavLink to='/menu' title='Menu'><i className='fa fa-book' aria-hidden='true' /></NavLink>
        <div><i className='fa fa-ellipsis-v' aria-hidden='true' /></div>
        <NavLink to='/contact' title='Contact Us'><i className='fa fa-volume-control-phone' aria-hidden='true' /></NavLink>
        <div><i className='fa fa-ellipsis-v' aria-hidden='true' /></div>
        <NavLink to='/location' title='Find Us'><i className='fa fa-map-marker' aria-hidden='true' /></NavLink>
        {/* <div><i className='fa fa-ellipsis-v' aria-hidden='true' /></div> */}
      </div>
    </nav>
  }
}

export default Navbar
