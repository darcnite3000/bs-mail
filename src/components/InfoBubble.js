import React from 'react'
import cx from 'classnames'
import '../styles/infoBubble.scss'

const InfoBubble = ({info, style, className}) => {
  const wrapClass = cx('info-bubble', className)
  return (
    <div className={wrapClass} style={style}>
      <div className='point' />
      <div className='wrap'>{info}</div>
    </div>
  )
}
InfoBubble.propTypes = {
  className: React.PropTypes.string,
  style: React.PropTypes.object,
  info: React.PropTypes.string
}

export default InfoBubble
