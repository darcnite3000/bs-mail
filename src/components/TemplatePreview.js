import React from 'react'
import fillTemplate from '../util/fillTemplate'

const TemplatePreview = ({template, config}) =>
  <iframe style={style} src={`data:text/html;charset=utf-8,${encodeURI(fillTemplate(template, config))}`} />
TemplatePreview.propTypes = {
  template: React.PropTypes.string.isRequired,
  config: React.PropTypes.object.isRequired
}

const style = {width: '100%', height: '100%'}

export default TemplatePreview
