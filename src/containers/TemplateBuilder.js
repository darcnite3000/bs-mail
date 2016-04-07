import React from 'react'
import Radium from 'radium'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import Tab from '../components/Tab'
import * as actions from '../actions/configActions'
import TemplateConfig from '../components/TemplateConfig'

const headerOptions = [
  '/images/logo_1.jpg',
  '/images/logo_2.jpg',
  '/images/logo_3.jpg'
]

const TemplateBuilder = ({configOptions, config, actions}) => {
  return (
    <section style={styles.outer}>
      <header style={[styles.inner, styles.header]}>
        <Tab kind='main'>Email Template</Tab>
        <Tab kind='aside' angles='before'>Preview</Tab>
      </header>
      <div style={[styles.inner, styles.main]}>
        <TemplateConfig
          id='subject'
          type='text'
          label='Email Subject - Type Here'
          value={config.subject}
          onChange={actions.updateConfig}
          desc='What is the subject of your email?' />
        <TemplateConfig
          style={styles.main}
          id='header'
          type='radioImage'
          label='Choose Header Image'
          value={config.header}
          options={headerOptions}
          onChange={actions.updateConfig}
          desc="Choose the logo or image that you'd like featured a the top of your email." />
        <div style={[styles.main, styles.innerMain]}>
          <div style={styles.heading}>Sample Content:</div>
          {
            configOptions.options.map((option) =>
              <TemplateConfig key={option.id}
                value={config[option.id]}
                descStyle={styles.innerFix}
                onChange={actions.updateConfig}
                {...option} />)
          }
        </div>
      </div>
    </section>
  )
}
TemplateBuilder.propTypes = {
  configOptions: React.PropTypes.object.isRequired,
  config: React.PropTypes.object.isRequired
}

const styles = {
  outer: {
    maxWidth: 960,
    margin: '10px auto'
  },
  inner: {
    maxWidth: 600,
    color: '#CDCDCD'
  },
  innerFix: {
    marginLeft: 5
  },
  header: {
    height: 30
  },
  heading: {
    fontWeight: 'bold'
  },
  main: {
    boxSizing: 'border-box',
    padding: 5,
    border: '1px solid'
  },
  innerMain: {
    marginTop: 10
  }
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
  mapDispatchToProps)(Radium(TemplateBuilder))
