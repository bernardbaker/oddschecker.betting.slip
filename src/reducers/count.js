import { INCREASE, DECREASE } from '../constants'

const initialState = {
  number: 0,
  previous: 0
}

export default function update(state = initialState, action) {
  if(action.type === INCREASE) {
    if(action.amount === '')  {
      action.amount = 0
    } else {
      state.previous = 0
    }
    return { number: parseFloat(parseFloat(state.number + parseFloat(action.amount)).toFixed(2)), previous: parseFloat(action.amount) }
  }
  if(action.type === DECREASE) {
    if(action.amount === '') {
      action.amount = 0
      return { number: state.number }
    } else {
      return { number: parseFloat(parseFloat(parseFloat(state.number - action.amount)).toFixed(2)) }
    }
  }
  return state
}
