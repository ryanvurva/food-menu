import React, { Component } from 'react'

import Specials from './Specials'

class Home extends Component {
  render () {
    return <div className='Home'>
      <div className='Valar'>
        <div className='content'>
          <div className='content__container'>
            <p className='content__container__text'>Valar</p>
            <ul className='content__container__list'>
              <li className='content__container__list__item'>morghulis</li>
              <li className='content__container__list__item'>dohaeris</li>
              <li className='content__container__list__item'>consumis</li>
              <li className='content__container__list__item'>alcoholis</li>
            </ul>
          </div>
        </div>
        {/* <div><i className='fa fa-chevron-down' aria-hidden='true' /></div> */}
      </div>
      <div className='seperator' />
      <div className='home-slide-1'>
        <div>
          <p>Braavos is the wealthiest and likely the most powerful of the Free Cities. It is located in a lagoon on the northwestern end of Essos, where the narrow sea and the Shivering Sea meet. Braavos is also known as Braavos of the Hundred Isles and the Secret City, a name also attributed to the city Nefer, the last remaining city of N'ghai. Additionally, Braavos is sometimes referred to as the bastard daughter of Valyria.</p>
          <p>Bistro Braavos is the finest restaurant in all of the free city of Braavos.  Come and see for yourself.</p>
        </div>
      </div>
      <div className='seperator' />
      <div className='wow home-slide-2'>
        <div className='background-slide-2' />
        <Specials />
      </div>
    </div>
  }
}

export default Home
