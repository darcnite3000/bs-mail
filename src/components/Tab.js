import React from 'react'
import cx from 'classnames'
import '../styles/tab.scss'

const Tab = ({onClick, children, kind, angles = 'both'}) => {
  const tabClass = cx('tab', `tab-${kind}`, `angles-${angles}`, {'clickable': onClick !== undefined})
  const angleBeforeClass = cx('angle', 'angle-before')
  const angleAfterClass = cx('angle', 'angle-after')
  return (
    <div className={tabClass} key='tab'>
      {(angles === 'both' || angles === 'before') &&
        <div className={angleBeforeClass} />}
      <div className='wrap' onClick={onClick}>{children}</div>
      {(angles === 'both' || angles === 'after') &&
        <div className={angleAfterClass} />}
    </div>
  )
}
Tab.propTypes = {
  onClick: React.PropTypes.func,
  children: React.PropTypes.node,
  kind: React.PropTypes.oneOf(['main', 'aside', 'overlay']),
  angles: React.PropTypes.oneOf(['before', 'after', 'both'])
}

export default Tab
