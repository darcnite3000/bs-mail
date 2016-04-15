import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import '../styles/templateBuilder.scss'
import Tab from '../components/Tab'
import * as actions from '../actions/configActions'
import TemplateConfig from '../components/TemplateConfig'
import TemplatePreview from '../components/TemplatePreview'
import Overlay from '../components/Overlay'
import fillTemplate from '../util/fillTemplate'

const headerOptions = [
  'logo_1.jpg',
  'logo_2.jpg',
  'logo_3.jpg'
]

const TemplateBuilder = ({configOptions, config, actions}) => {
  const showPreview = () => {
    if (!configOptions.templateLoading && configOptions.templateURL && !configOptions.template) {
      actions.loadPreviewTemplate(configOptions.templateURL)
    }
    actions.togglePreview()
  }
  const hidePreview = () => {
    actions.togglePreview()
  }
  const sendMail = () => {
    actions.sendMail(
      config.toEmail,
      config.fromEmail,
      config.subject, fillTemplate(configOptions.template, config))
  }

  return (
    <section className='template-builder'>
      <header className='content header'>
        <Tab kind='main'>Email Template</Tab>
        <Tab kind='aside'
          onClick={showPreview}
          angles='before'>Preview</Tab>
      </header>
      <div className='content body'>
        <TemplateConfig
          id='subject'
          type='text'
          label='Email Subject - Type Here'
          value={config.subject}
          onChange={actions.updateConfig}
          desc='What is the subject of your email?' />
        <TemplateConfig
          id='header'
          type='radioImage'
          label='Choose Header Image'
          value={config.header}
          options={headerOptions}
          onChange={actions.updateConfig}
          desc="Choose the logo or image that you'd like featured a the top of your email." />
        <div className='body'>
          <div className='title'>Sample Content:</div>
          {
            configOptions.options.map((option) =>
              <TemplateConfig key={option.id}
                value={config[option.id]}
                descStyle={{marginLeft: 5}}
                onChange={actions.updateConfig}
                {...option} />)
          }
        </div>
        <TemplateConfig
          type='sendMail'
          desc={"Once you're done, just enter the email addresses that you wish to recieve this offer, " +
                "then hit the big blue send button. It's that easy!"}
          id='Email'
          value={{to: config.toEmail, 'from': config.fromEmail}}
          onChange={actions.updateConfig}
          onClick={sendMail}
          disabled={configOptions.mailing} />
      </div>
      {
        configOptions.showPreview &&
          <Overlay close={hidePreview}>
            <TemplatePreview
              template={configOptions.template}
              config={config}/>
          </Overlay>
      }
    </section>
  )
}
TemplateBuilder.propTypes = {
  configOptions: React.PropTypes.object.isRequired,
  config: React.PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  configOptions: state.templateConfigOptionsState,
  config: state.templateConfigState
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps)(TemplateBuilder)
