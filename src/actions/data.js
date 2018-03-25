import { 
  OPTION1,
  OPTION_1_SUCCESS,
  OPTION2,
  OPTION_2_SUCCESS,
  STORE_OPTION,
  CALCULATE_STAKE,
  BET_AGAIN } from '../constants'

export function option1() {
  return function action(dispatch) {
    const request = fetch('/decimalOddsMoreThanTwo',
    {
      headers: {
        type: 'decimalOddsMoreThanTwo'
      }
    })
    return request.then(
      response => {
        response.json()
        .then(results => { 
          dispatch(option1Success(results))
        })
      },
      err => console.log(err)
    );
  }
}

export function option1Success(data) {
  return {
    type: OPTION_1_SUCCESS,
    payload: data
  }
}

export function option2() {
  return function action(dispatch) {
    const request = fetch('/decimalOddsLessThanTwo',
    {
      headers: {
        type: 'decimalOddsLessThanTwo'
      }
    })
    return request.then(
      response => {
        response.json()
        .then(results => { 
          dispatch(option2Success(results))
        })
      },
      err => console.log(err)
    )
  }
}

export function option2Success(data) {
  return {
    type: OPTION_2_SUCCESS,
    payload: data
  }
}

export function storeOption(o) {
  return {
    type: STORE_OPTION,
    option: o
  }
}

export function calculateStake() {
  return {
    type: CALCULATE_STAKE
  }
}

export function betAgain() {
  return {
    type: BET_AGAIN
  }
}