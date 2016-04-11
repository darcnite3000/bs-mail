import React from 'react'
import Radium from 'radium'
import InputText from './TemplateInputText'

const TemplateSendMail = ({id, value, onClick, onChange, disabled}) => {
  return (
    <div style={styles.outer}>
      <div style={styles.left}>
        <InputText label='To Email' value={value.to} id={`to${id}`} onChange={onChange} />
        <InputText label='From Email' value={value.from} id={`from${id}`} onChange={onChange} />
      </div>
      <div style={styles.right}>
        <button style={styles.button} onClick={onClick} disabled={disabled}>Send</button>
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

const styles = {
  outer: {
    overflow: 'auto'
  },
  left: {
    width: '80%',
    float: 'left'
  },
  right: {
    width: '20%',
    float: 'left',
    boxSizing: 'border-box',
    padding: '10px 0 0 10px'
  },
  button: {
    display: 'block',
    width: '100%',
    padding: '28px 0',
    background: '#C0E6FD',
    borderWidth: 1,
    borderRadius: 5
  }
}

export default Radium(TemplateSendMail)
