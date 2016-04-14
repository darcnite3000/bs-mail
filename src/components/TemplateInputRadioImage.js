import React from 'react'
import Radium from 'radium'
import RadioOption from './TemplateInputRadioImageOption'
import '../styles/templateInput.scss'

const TemplateInputRadioImage = ({id, label, value, style, options, onChange}) => {
  const innerStyle = {
    width: options.length * 190
  }
  return (
    <div style={[styles.outer, style]}>
      {label && <div style={styles.heading}>{label}:</div>}
      <div style={[styles.inner, innerStyle]}>
        {
          options.map((option) =>
            <RadioOption key={option} id={id}
              value={value}
              onChange={onChange}
              option={option} />)
        }
      </div>
    </div>
  )
}
TemplateInputRadioImage.propTypes = {
  id: React.PropTypes.string,
  label: React.PropTypes.string,
  value: React.PropTypes.string,
  style: React.PropTypes.object,
  options: React.PropTypes.array.isRequired,
  onChange: React.PropTypes.func.isRequired
}

const styles = {
  outer: {
    marginTop: 10,
    overflow: 'auto'
  },
  inner: {},
  heading: {
    marginBottom: 5,
    fontWeight: 'bold'
  }
}

export default Radium(TemplateInputRadioImage)
