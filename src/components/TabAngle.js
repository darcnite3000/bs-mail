import React from 'react'
import Radium from 'radium'

const TabAngle = ({kind, side}) =>
  <div style={[styles.base, styles[side], styles[kind][side]]}/>
TabAngle.propTypes = {
  kind: React.PropTypes.oneOf(['main', 'aside']),
  side: React.PropTypes.oneOf(['before', 'after'])
}

const styles = {
  base: {
    position: 'absolute',
    bottom: 0,
    width: 10,
    height: 13,
    borderStyle: 'solid',
    borderColor: '#CDCDCD',
    boxSizing: 'border-box'
  },
  main: {
    before: {
      boxShadow: '3px 5px 0 #ffffff'
    },
    after: {
      boxShadow: '-3px 5px 0 #ffffff'
    }
  },
  aside: {
    before: {
      boxShadow: '3px 4px 0 #F3F3F3'
    },
    after: {
      boxShadow: '-3px 4px 0 #F3F3F3'
    }
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
