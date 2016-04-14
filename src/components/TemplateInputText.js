import React from 'react'
import Radium from 'radium'
import '../styles/templateInput.scss'

const TemplateInputText = ({id, label, value, style, onChange}) => {
  const handleChange = (e) => {
    onChange(id, e.target.value)
  }
  return (
    <input id={id} style={[styles.base, style]}
      value={value}
      placeholder={label}
      onChange={handleChange} />
  )
}
TemplateInputText.propTypes = {
  id: React.PropTypes.string,
  label: React.PropTypes.string,
  value: React.PropTypes.string,
  style: React.PropTypes.object,
  onChange: React.PropTypes.func.isRequired
}

const styles = {
  base: {
    width: '100%',
    padding: 5,
    fontSize: 13,
    boxSizing: 'border-box',
    marginTop: 10
  }
}

export default Radium(TemplateInputText)
