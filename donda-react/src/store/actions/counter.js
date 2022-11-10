export const INCREMENT = 'counter/INCREMENT'
export const DECREMENT = 'counter/DECREMENT'

const initialState = {
  number: 1
}

export const increment = () => ({type: INCREMENT})
export const decrease = () => ({type: INCREMENT})

export default function counter(state = initialState, action) {
  switch(action.type) {
    case INCREMENT:
      return {
        number: state.number + 1,
      }
    case DECREMENT:
      return state.number - 1
    default:
      return state
  }  
}