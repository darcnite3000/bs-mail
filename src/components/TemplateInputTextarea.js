import React from 'react'
import cx from 'classnames'
import '../styles/templateInput.scss'

const TemplateInputTextarea = ({id, label, value, onChange}) => {
  const handleChange = (e) => {
    onChange(id, e.target.value)
  }
  const inputClass = cx('template-input', 'block', {'no-border': !label})
  return (
    <div className={inputClass}>
      {label && <div className='title'>{label}:</div>}
      <textarea id={id} className='textarea'
        onChange={handleChange}
        value={value} />
    </div>
  )
}
TemplateInputTextarea.propTypes = {
  id: React.PropTypes.string,
  label: React.PropTypes.string,
  value: React.PropTypes.string,
  onChange: React.PropTypes.func.isRequired
}

export default TemplateInputTextarea
