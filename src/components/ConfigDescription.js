import React from 'react'
import InfoBubble from './InfoBubble'
import '../styles/configDescription.scss'

const ConfigOption = ({desc, children, style}) =>
  <div className='config-description'>
    {children}
    <InfoBubble className='description' style={style} info={desc} />
  </div>

ConfigOption.propTypes = {
  style: React.PropTypes.object,
  children: React.PropTypes.element.isRequired,
  desc: React.PropTypes.string.isRequired
}

export default ConfigOption
