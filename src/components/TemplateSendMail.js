import React from 'react'
import cx from 'classnames'
import InputText from './TemplateInputText'
import '../styles/templateInput.scss'

const TemplateSendMail = ({id, value, onClick, onChange, disabled}) => {
  const templateClass = cx('template-input', 'template-input-sendmail')
  return (
    <div className={templateClass}>
      <div className='left'>
        <InputText label='To Email' value={value.to} id={`to${id}`} onChange={onChange} />
        <InputText label='From Email' value={value.from} id={`from${id}`} onChange={onChange} />
      </div>
      <div className='right'>
        <button onClick={onClick} disabled={disabled}>Send</button>
      </div>
    </div>
  )
}
TemplateSendMail.propTypes = {
  disabled: React.PropTypes.bool,
  value: React.PropTypes.object.isRequired,
  id: React.PropTypes.string,
  onClick: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired
}

export default TemplateSendMail
