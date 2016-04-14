import React from 'react'
import logo from '../images/logo.jpg'
import builder from '../images/builder.jpg'
import '../styles/heading.scss'

const Heading = () =>
  <header className='heading'>
    <div className='wrap'>
      <div className='logo'><img src={logo} alt='Bazar Studios' /></div>
      <div className='title'><img src={builder} alt='Email Builder' /></div>
    </div>
  </header>

export default Heading
