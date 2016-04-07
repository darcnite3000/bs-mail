import React from 'react'
import Radium from 'radium'

import TabAngle from './TabAngle'

const Tab = ({children, kind, angles = 'both'}) =>
  <div style={[styles.base, styles[kind], styles[angles]]}>
    {(angles === 'both' || angles === 'before') && <TabAngle kind={kind} side='before' />}
    <div style={[styles.inner.base, styles.inner[kind]]}>{children}</div>
    {(angles === 'both' || angles === 'after') && <TabAngle kind={kind} side='after' />}
  </div>

Tab.propTypes = {
  children: React.PropTypes.node,
  kind: React.PropTypes.oneOf(['main', 'aside']),
  angles: React.PropTypes.oneOf(['before', 'after', 'both'])
}

const styles = {
  base: {
    fontSize: 16,
    position: 'relative',
    overflow: 'hidden',
    bottom: -1,
    display: 'block',
    float: 'left'
  },
  main: {
    zIndex: 2
  },
  aside: {
    fontSize: 12,
    lineHeight: '18px',
    float: 'right',
    bottom: -1,
    zIndex: -1
  },
  inner: {
    base: {
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: '#CDCDCD',
      borderRadius: '18px 18px 0 0',
      padding: '5px 15px',
      background: '#F3F3F3'
    },
    main: {
      color: '#CDCDCD',
      background: '#ffffff',
      borderColor: '#CDCDCD #CDCDCD #ffffff #CDCDCD'
    },
    aside: {
      borderColor: '#CDCDCD',
      color: '#000'
    }
  },
  both: {
    padding: '0 9px'
  },
  before: {
    padding: '0 0 0 9px'
  },
  after: {
    padding: '0 9px 0 0'
  }
}

export default Radium(Tab)
