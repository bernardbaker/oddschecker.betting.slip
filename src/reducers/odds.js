import fetch from 'cross-fetch'

import { OPTION_1_SUCCESS, OPTION_2_SUCCESS } from '../constants'

const initialState = {
  bar: 'foo bar',
  data: []
}

export default function update(state = initialState, action) {
  switch(action.type) {
    case OPTION_1_SUCCESS :
      console.log('payload', action.payload)
      return Object.assign({}, state, {
        data: action.payload
      })
    case OPTION_2_SUCCESS :
      console.log('payload', action.payload)
      return Object.assign({}, state, {
        data: action.payload
      })
    default :
      return state
  }
}
