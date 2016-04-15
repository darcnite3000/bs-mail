import React from 'react'
import fillTemplate from '../util/fillTemplate'

class TemplatePreview extends React.Component {
  componentDidMount () {
    const {template, config} = this.props
    const {frame} = this.refs
    const fcw = frame.contentWindow
    const filledTemplate = fillTemplate(template, config)
    fcw.document.open()
    fcw.document.write(filledTemplate)
    fcw.document.close()
  }
  render () {
    return <iframe style={style} ref='frame' />
  }
}
TemplatePreview.propTypes = {
  template: React.PropTypes.string.isRequired,
  config: React.PropTypes.object.isRequired
}

const style = {width: '100%', height: '100%'}

export default TemplatePreview
