import React from 'react'
import Radium from 'radium'

const TemplateInputRadioImageOption = ({id, value, option, onChange}) => {
  const handleChange = (e) => {
    onChange(id, e.target.value)
  }
  const selected = option === value
  return (
    <label style={styles.label} htmlFor={`${id}_${option}`}>
      <input
        style={styles.input}
        name={id}
        id={`${id}_${option}`}
        value={option}
        type='radio'
        checked={selected}
        onChange={handleChange} />
      <img style={styles.image} src={`./images/${option}`} />
    </label>
  )
}
TemplateInputRadioImageOption.propTypes = {
  onChange: React.PropTypes.func.isRequired,
  id: React.PropTypes.string.isRequired,
  value: React.PropTypes.string,
  option: React.PropTypes.string.isRequired
}

const styles = {
  label: {
    display: 'inline-block',
    verticalAlign: 'middle',
    width: 180,
    margin: '0px 5px'
  },
  image: {
    verticalAlign: 'middle',
    maxWidth: 150,
    maxHeight: 100
  },
  input: {
    verticalAlign: 'middle'
  }
}

export default Radium(TemplateInputRadioImageOption)
