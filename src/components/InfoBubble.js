import React from 'react'
import Radium from 'radium'

const InfoBubble = ({info, style}) =>
  <div style={[styles.outer, style]}>
    <div style={styles.point}/>
    <div style={styles.inner}>{info}</div>
  </div>
InfoBubble.propTypes = {
  style: React.PropTypes.object,
  info: React.PropTypes.string
}

const styles = {
  outer: {
    position: 'relative'
  },
  inner: {
    marginLeft: 15,
    fontSize: 13,
    width: 250,
    color: '#888888',
    borderRadius: 4,
    position: 'relative',
    background: '#C0E6FD',
    padding: 5,
    boxSizing: 'border-box',
    boxShadow: '1px 1px 1px #888888'
  },
  point: {
    position: 'absolute',
    left: 5,
    top: 5,
    borderStyle: 'solid',
    borderWidth: '5px 10px 5px 0px',
    borderColor: 'transparent #C0E6FD transparent transparent'
  }
}

export default Radium(InfoBubble)
