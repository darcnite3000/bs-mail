import React from 'react'
import '../styles/templateInput.scss'

const TemplateInputText = ({id, label, value, onChange}) => {
  const handleChange = (e) => {
    onChange(id, e.target.value)
  }
  return (
    <input className='template-input' id={id}
      value={value}
      placeholder={label}
      onChange={handleChange} />
  )
}
TemplateInputText.propTypes = {
  id: React.PropTypes.string,
  label: React.PropTypes.string,
  value: React.PropTypes.string,
  onChange: React.PropTypes.func.isRequired
}

export default TemplateInputText
