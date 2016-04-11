import React from 'react'
import Radium from 'radium'

const InfoBubble = ({info, style}) =>
  <div style={[styles.outer, style]}>
    <div style={styles.point}>&#9664;</div>
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
    padding: 15,
    boxSizing: 'border-box',
    boxShadow: '1px 1px 1px #888888'
  },
  point: {
    position: 'absolute',
    zIndex: -1,
    fontSize: 23,
    textShadow: '1px 2px #888888',
    left: 12,
    top: 5,
    color: '#e5f5fe'
  }
}

export default Radium(InfoBubble)
