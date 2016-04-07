import * as types from '../constants/ActionTypes'

const initialState = {
  showPreview: false,
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
        '/images/sale_1.jpg',
        '/images/sale_2.jpg',
        '/images/sale_3.jpg'
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
    case types.TOGGLE_PREVIEW:
      return {...state, showPreview: !state.showPreview}
    default:
      return state
  }
}

export default templateConfigOptions
