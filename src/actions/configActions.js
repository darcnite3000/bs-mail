import * as types from '../constants/ActionTypes'

export function updateConfig (id, value) {
  return {type: types.UPDATE_CONFIG, id, value}
}

export function togglePreview () {
  return {type: types.TOGGLE_PREVIEW}
}
