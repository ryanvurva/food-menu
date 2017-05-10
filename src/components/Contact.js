import React, { Component } from 'react'

class Contact extends Component {
  render () {
    return <div className='Contact'>
      <div className='Form'>
        <h3>Contact Us -</h3>
        <form action=''>
          <div className='credentials'>
            <input type='text' id='Name' placeholder='first name' />
            <input type='text' id='Email' placeholder='last name' />
          </div>
          <div className='contact-info'>
            <input type='tel' id='Phone' placeholder='phone number' />
            <input type='email' id='Email' placeholder='email address' />
          </div>
          <div className='comments'>
            <textarea name='Comments' id='Comments' placeholder='Comments?' cols='42' rows='10' />
          </div>
        </form>
      </div>
      <div className='Form'>
        <h3>Reserve a Table -</h3>
        <form action=''>
          <div className='credentials'>
            <input type='text' id='Name' placeholder='first name' />
            <input type='text' id='Email' placeholder='last name' />
          </div>
          <div className='contact-info'>
            <input type='tel' id='Phone' placeholder='phone number' />
            <input type='email' id='Email' placeholder='email address' />
          </div>
          <div className='guests'>
            <input type='number' id='Phone' placeholder='number of guests' />
          </div>
          <div className='comments'>
            <textarea name='Comments' id='Comments' placeholder='Comments?' cols='42' rows='10' />
          </div>
        </form>
      </div>
    </div>
  }
}

export default Contact
