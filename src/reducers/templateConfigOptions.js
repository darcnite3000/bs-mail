import * as types from '../constants/ActionTypes'
import template from '../templates/bs_1604_email.html'
const initialState = {
  showPreview: false,
  templateURL: './templates/bs_1604_email.html',
  templateLoading: false,
  mailing: false,
  template,
  options: [
    {
      id: 'main',
      type: 'textarea',
      desc: 'In this section, enter the details of your totally awesome sales offer. Try to make it POP!'
    },
    {
      id: 'sales',
      type: 'radioImage',
      desc: 'Choose an image that truly expresses the awesomeness of your sales offer.',
      options: [
        'sale_1.jpg',
        'sale_2.jpg',
        'sale_3.jpg'
      ]
    },
    {
      id: 'footer',
      type: 'textarea',
      desc: 'Finish off your email with a blurb to entice recipients to take up your totally awesome sales offer.'
    }
  ]
}

const templateConfigOptions = (state = initialState, action) => {
  switch (action.type) {
    case types.SENDING_MAIL:
      return {...state, mailing: true}
    case types.SENT_MAIL:
      return {...state, mailing: false}
    case types.START_TEMPLATE_LOADING:
      return {...state, templateLoading: true}
    case types.UPDATE_PREVIEW_TEMPLATE:
      return {
        ...state,
        templateURL: action.templateURL,
        template: action.template,
        templateLoading: true
      }
    case types.TOGGLE_PREVIEW:
      return {...state, showPreview: !state.showPreview}
    default:
      return state
  }
}

export default templateConfigOptions
