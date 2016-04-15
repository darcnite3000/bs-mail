import React from 'react'
import '../styles/templateInput.scss'

const TemplateInputRadioImageOption = ({id, value, option, onChange}) => {
  const handleChange = (e) => {
    onChange(id, e.target.value)
  }
  const selected = option === value
  return (
    <label className='template-input-radio-option' htmlFor={`${id}_${option}`}>
      <input
        name={id}
        id={`${id}_${option}`}
        value={option}
        type='radio'
        checked={selected}
        onChange={handleChange} />
      <img src={`./images/${option}`} />
    </label>
  )
}
TemplateInputRadioImageOption.propTypes = {
  onChange: React.PropTypes.func.isRequired,
  id: React.PropTypes.string.isRequired,
  value: React.PropTypes.string,
  option: React.PropTypes.string.isRequired
}

export default TemplateInputRadioImageOption
