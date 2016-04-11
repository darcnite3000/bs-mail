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

export function sendingMail () {
  return {type: types.SENDING_MAIL}
}
export function sentMail (response) {
  return {type: types.SENT_MAIL, response}
}
export function sendMail (emailTo, emailFrom, emailSubject, emailBody) {
  return (dispatch) => {
    dispatch(sendingMail())
    fetch('http://www.bazarstudios.com/client_work/mailers/mc.php', {
      method: 'POST',
      body: JSON.stringify({to: emailTo, 'from': emailFrom, subject: emailSubject, body: emailBody})
    }).then((response) => {
      if (response.status !== 200) {
        throw new Error('Email Not Sent')
      }
      return response.json()
    })
    .then((data) => {
      dispatch(sentMail(data))
    })
    .catch((err) => {
      dispatch(sentMail(err))
    })
  }
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
