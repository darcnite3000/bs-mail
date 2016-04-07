import React from 'react'
import Radium from 'radium'
import InfoBubble from './InfoBubble'

const ConfigOption = ({desc, children, style}) =>
  <div style={styles.outer}>
    {children}
    <InfoBubble style={[styles.description, style]} info={desc} />
  </div>

ConfigOption.propTypes = {
  style: React.PropTypes.object,
  children: React.PropTypes.element.isRequired,
  desc: React.PropTypes.string.isRequired
}

const styles = {
  outer: {
    position: 'relative'
  },
  description: {
    position: 'absolute',
    top: 0,
    left: '100%'
  }
}

export default Radium(ConfigOption)
