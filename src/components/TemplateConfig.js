import React from 'react'
import ConfigDescription from './ConfigDescription'
import InputText from './TemplateInputText'
import InputTextarea from './TemplateInputTextarea'
import InputRadioImage from './TemplateInputRadioImage'

const TemplateConfig = ({desc, type, descStyle, ...config}) => {
  let el
  switch (type) {
    case 'radioImage':
      el = <InputRadioImage {...config} />
      break
    case 'textarea':
      el = <InputTextarea {...config} />
      break
    default:
      el = <InputText {...config} />
  }
  return <ConfigDescription desc={desc} style={descStyle}>{el}</ConfigDescription>
}
TemplateConfig.propTypes = {
  desc: React.PropTypes.string,
  descStyle: React.PropTypes.object,
  type: React.PropTypes.string.isRequired
}

export default TemplateConfig
