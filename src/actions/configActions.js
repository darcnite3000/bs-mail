import * as types from '../constants/ActionTypes'

export function updateConfig (id, value) {
  return {type: types.UPDATE_CONFIG, id, value}
}

export function togglePreview () {
  return {type: types.TOGGLE_PREVIEW}
}

export function setPreviewTemplate (templateURL, template) {
  return {type: types.UPDATE_PREVIEW_TEMPLATE, templateURL, template}
}

export function startLoadingTemplate () {
  return {type: types.START_TEMPLATE_LOADING}
}

export function loadPreviewTemplate (templateURL) {
  return (dispatch) => {
    dispatch(startLoadingTemplate())
    fetch(templateURL)
      .then((response) => response.text())
      .then((template) => {
        dispatch(setPreviewTemplate(templateURL, template))
      })
  }
}
