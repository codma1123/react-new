
// action types
const SET_DIFF = 'counter/SET_DIFF'
const INCREASE = 'counter/INCREASE'
const DECREASE = 'counter/DECREASE'

// actions
export const setDiff = diff => ({ type: SET_DIFF, diff})
export const increase = () => ({ type: INCREASE })
export const decrease = () => ({ type: DECREASE })

// define init state
const initialState = {
  number : 0,
  diff: 1
}


export default function counter (state = initialState, action) {
  console.log(action)
  switch (action.type) {
    case SET_DIFF:
      return {
        ...state,
        diff: action.diff
      }

    case INCREASE:
      console.log(state)
      return {
        ...state,
        number: state.number + state.diff
      }

    case DECREASE:
      return {
        ...state,
        number: state.number - state.diff
      }

    default:
      return state
  }
}






