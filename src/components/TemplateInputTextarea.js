import React from 'react'
import Radium from 'radium'

const TemplateInputTextarea = ({id, label, value, style, onChange}) => {
  const handleChange = (e) => {
    onChange(id, e.target.value)
  }
  return (
    <div style={[styles.outer, style]}>
      {label && <div style={styles.heading}>{label}:</div>}
      <textarea id={id} style={styles.inner}
        onChange={handleChange}
        value={value} />
    </div>
  )
}
TemplateInputTextarea.propTypes = {
  id: React.PropTypes.string,
  label: React.PropTypes.string,
  value: React.PropTypes.string,
  style: React.PropTypes.object,
  onChange: React.PropTypes.func.isRequired
}

const styles = {
  outer: {
    marginTop: 10
  },
  inner: {
    width: '100%',
    minHeight: 200,
    padding: 5,
    fontSize: 13,
    boxSizing: 'border-box'
  },
  heading: {
    marginBottom: 5,
    fontWeight: 'bold'
  }
}

export default Radium(TemplateInputTextarea)
