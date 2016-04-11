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
    marginLeft: 30,
    fontSize: 15,
    fontFamily: "TimesNewRoman, 'Times New Roman', Times, Baskerville, Georgia, serif",
    width: 320,
    color: '#888888',
    borderRadius: 4,
    position: 'relative',
    background: '#E5F5FE',
    padding: 10,
    boxSizing: 'border-box',
    boxShadow: '1px 1px 1px #888888'
  },
  point: {
    position: 'absolute',
    left: 15,
    top: 5,
    borderStyle: 'solid',
    borderWidth: '8px 15px 8px 0px',
    borderColor: 'transparent #E5F5FE transparent transparent'
  }
}

export default Radium(InfoBubble)
