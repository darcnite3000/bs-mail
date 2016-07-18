import React from 'react'
import Tab from './Tab'
import '../styles/overlay.scss'

const Overlay = ({children, close}) => {
  return (
    <div className='overlay'>
      <div className='catch' onClick={close} />
      <div className='wrap'>
        <div className='close'><Tab onClick={close} kind='overlay' angles='before'>Close</Tab></div>
        <div className='container'>{children}</div>
      </div>
    </div>
  )
}
Overlay.propTypes = {
  children: React.PropTypes.node.isRequired,
  close: React.PropTypes.func.isRequired
}

export default Overlay
