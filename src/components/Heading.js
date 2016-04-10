import React from 'react'
import Radium from 'radium'
import logo from '../images/logo.jpg'
import builder from '../images/builder.jpg'

const Heading = () =>
  <header style={styles.outer}>
    <div style={styles.inner}>
      <div style={styles.logo}><img src={logo} alt='Bazar Studios' /></div>
      <div style={styles.builder}><img src={builder} alt='Email Builder' /></div>
    </div>
  </header>

const styles = {
  outer: {
    background: '#C0E6FD'
  },
  inner: {
    maxWidth: 960,
    margin: '0 auto',
    boxSizing: 'border-box',
    padding: 5,
    overflow: 'hidden'
  },
  logo: {
    display: 'inline-block'
  },
  builder: {
    display: 'inline-block',
    float: 'right',
    marginTop: 93
  }
}

export default Radium(Heading)
