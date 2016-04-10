import React from 'react'
import Radium from 'radium'

const TabAngle = ({side, border, background}) => {
  const style = {
    base: {
      borderColor: border
    },
    before: {
      boxShadow: `3px 5px 0 ${background}`
    },
    after: {
      boxShadow: `-3px 5px 0 ${background}`
    }
  }

  return <div style={[styles.base, styles[side], style.base, style[side]]}/>
}
TabAngle.propTypes = {
  border: React.PropTypes.string,
  background: React.PropTypes.string,
  side: React.PropTypes.oneOf(['before', 'after'])
}

const styles = {
  base: {
    position: 'absolute',
    bottom: 0,
    width: 10,
    height: 13,
    borderStyle: 'solid',
    boxSizing: 'border-box'
  },
  before: {
    left: 0,
    borderRadius: '0 0 24px 0',
    borderWidth: '0 1px 1px 0'
  },
  after: {
    right: 0,
    borderRadius: '0 0 0 24px',
    borderWidth: '0 0 1px 1px'
  }
}

export default Radium(TabAngle)
