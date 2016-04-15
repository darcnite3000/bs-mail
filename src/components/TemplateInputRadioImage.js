import React from 'react'
import cx from 'classnames'
import RadioOption from './TemplateInputRadioImageOption'
import '../styles/templateInput.scss'

const TemplateInputRadioImage = ({id, label, value, style, options, onChange}) => {
  const innerStyle = {
    width: options.length * 190
  }
  const inputClass = cx('template-input', 'block', {'no-border': !label})
  return (
    <div className={inputClass}>
      {label && <div className='title'>{label}:</div>}
      <div style={innerStyle}>
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

export default TemplateInputRadioImage
