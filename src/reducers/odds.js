import { 
  OPTION_1_SUCCESS,
  OPTION_2_SUCCESS,
  STORE_OPTION,
  CALCULATE_STAKE } from '../constants'

const initialState = {
  data: [],
  option_1_data: [],
  option_2_data: [],
  option_1_data_set: false,
  option_2_data_set: false,
  option: null,
  total: 0
}

export default function update(state = initialState, action) {
  switch(action.type) {
    case OPTION_1_SUCCESS :
      if(!state.option_1_data_set) {
        console.log('payload', action.payload)
        return Object.assign({}, state, {
          data: action.payload, option_1_data: action.payload, option_1_data_set: true
        })
      } else {
        let values = state.option_1_data.slice()
        return Object.assign({}, state, {
          data: values
        })
      }
    case OPTION_2_SUCCESS :
      if(!state.option_2_data_set) {
        console.log('payload', action.payload)
        return Object.assign({}, state, {
          data: action.payload, option_2_data: action.payload, option_2_data_set: true
        })
      } else {
        let values = state.option_2_data.slice()
        return Object.assign({}, state, {
          data: values
        })
      }
    case STORE_OPTION :
      return Object.assign({}, state, {
        option: action.option
      })
    case CALCULATE_STAKE :
      let value = 0
      state.option_1_data.forEach(item => {
        item.odds.map(odd => {
          value += parseFloat(odd.stake)
        })
      })
      state.option_2_data.forEach(item => {
        item.odds.map(odd => {
          value += parseFloat(odd.stake)
        })
      })
      return Object.assign({}, state, {
        total: value
      })
    default :
      return state
  }
}
