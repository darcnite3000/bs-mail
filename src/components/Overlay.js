import React from 'react'
import Radium from 'radium'
import Tab from './Tab'

const Overlay = ({children, close}) => {
  return (
    <div style={styles.base}>
      <div style={styles.catcher} onClick={close}/>
      <div style={styles.wrapper}>
        <div style={styles.close}><Tab onClick={close} kind='overlay' angles='before'>Close</Tab></div>
        <div style={styles.container}>{children}</div>
      </div>
    </div>
  )
}
Overlay.propTypes = {
  children: React.PropTypes.node.isRequired,
  close: React.PropTypes.func.isRequired
}

const styles = {
  base: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 100
  },
  catcher: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0,0,0,0.6)',
    zIndex: 1
  },
  wrapper: {
    position: 'relative',
    zIndex: 1,
    maxWidth: 960,
    height: '100%',
    margin: 'auto',
    padding: '30px 0',
    boxSizing: 'border-box'
  },
  close: {
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 1
  },
  container: {
    position: 'relative',
    background: '#C0E6FD',
    height: '100%',
    zIndex: 1,
    borderRadius: '10px 0 10px 10px',
    padding: 10
  }
}

export default Radium(Overlay)
