import React from 'react'
import Radium from 'radium'
import color from 'color'

import TabAngle from './TabAngle'

class Tab extends React.Component {
  render () {
    const {onClick, children, kind, angles = 'both'} = this.props
    const tabIsHover = Radium.getState(this.state, 'tab', ':hover')
    const style = getStyle({kind, angles, hover: tabIsHover, clickable: onClick !== undefined})
    return (
      <div key='tab' style={[style.outer, styles[kind], style]}>
        {(angles === 'both' || angles === 'before') && <TabAngle {...style.colors} side='before' />}
        <div style={[style.inner]} onClick={onClick}>{children}</div>
        {(angles === 'both' || angles === 'after') && <TabAngle {...style.colors} side='after' />}
      </div>
    )
  }
}
Tab.propTypes = {
  onClick: React.PropTypes.func,
  children: React.PropTypes.node,
  kind: React.PropTypes.oneOf(['main', 'aside', 'overlay']),
  angles: React.PropTypes.oneOf(['before', 'after', 'both'])
}

const getStyle = ({kind, angles = 'both', clickable = false, hover = false}) => {
  const colors = hover
    ? {...styleColors[kind], background: color(styleColors[kind].background).lighten(0.05).hexString()}
    : styleColors[kind]
  const innerBorder = kind === 'main'
    ? `${colors.border} ${colors.border} ${colors.background} ${colors.border}`
    : colors.border
  return {
    colors,
    outer: {
      fontSize: 16,
      position: 'relative',
      overflow: 'hidden',
      bottom: -1,
      display: 'block',
      float: 'left',
      padding: angles === 'before'
        ? '0 0 0 9px'
        : angles === 'after'
          ? '0 9px 0 0'
          : '0 9px',
      cursor: clickable ? 'pointer' : 'inherit',
      ':hover': {}
    },
    inner: {
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: innerBorder,
      borderRadius: '18px 18px 0 0',
      padding: '5px 15px',
      color: colors.color,
      background: colors.background
    }
  }
}
const styleColors = {
  main: {
    color: '#CDCDCD',
    background: '#ffffff',
    border: '#CDCDCD'
  },
  aside: {
    color: '#000000',
    background: '#F3F3F3',
    border: '#CDCDCD'
  },
  overlay: {
    color: '#000000',
    background: '#C0E6FD',
    border: 'transparent'
  }
}
const styles = {
  main: {
    zIndex: 2
  },
  aside: {
    fontSize: 12,
    lineHeight: '18px',
    float: 'right',
    bottom: -1
  },
  overlay: {
    fontSize: 12,
    lineHeight: '18px',
    bottom: -1
  }

}

export default Radium(Tab)
