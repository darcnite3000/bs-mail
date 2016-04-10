import React from 'react'
import fillTemplate from '../util/fillTemplate'

const TemplatePreview = ({template, config, style}) =>
  <iframe style={style} src={`data:text/html;charset=utf-8,${encodeURI(fillTemplate(template, config))}`} />

export default TemplatePreview
