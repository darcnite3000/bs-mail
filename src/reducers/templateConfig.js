import * as types from '../constants/ActionTypes'

const initialState = {
  subject: '',
  header: '/images/logo_1.jpg',
  main: `Hi (name),
Check it out! Everything is ON SALE at Bazar Studios, your plug-in creative department.

All HTML5 work slashed! That's Banners, eDMs and Landing Pages... You brief it in, we'll
discount out build costs! Wow... I know, right!`,
  sales: '/images/sale_1.jpg',
  footer: `You'll think we've gone CRAZY with these cut proce deals on all digital production products.
Get in quick so you don't miss out, we'll be booked out in no time.templateConfigOptions.js

Oh no! You're already taking too long... Click here to get in touch!

Kind regards
The peeps @ Bazar Studios`
}

const templateConfig = (state = initialState, action) => {
  // console.log(state, action)
  switch (action.type) {
    case types.UPDATE_CONFIG:
      return {...state, [action.id]: action.value}
    default:
      return state
  }
}

export default templateConfig
