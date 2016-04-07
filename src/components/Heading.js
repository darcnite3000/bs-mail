import React from 'react'
import Radium from 'radium'

const Heading = () =>
  <header style={styles.outer}>
    <div style={styles.inner}>
      <h1>Bazar Studios</h1>
      <h2>Email Builder</h2>
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
    padding: 5
  }
}

export default Radium(Heading)
