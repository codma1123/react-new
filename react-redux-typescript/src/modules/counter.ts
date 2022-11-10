import {  
  ActionType,
  createReducer
} from 'typesafe-actions'
const INCREASE = 'counter/INCREASE' as const
const DECREASE = 'counter/DECREASE' as const
const INCREASE_BY = 'counter/INCREASE_BY' as const


// create actions
export const increase = () => ({ type: INCREASE })
export const decrease = () => ({ type: DECREASE })
export const increaseBy = (diff: number) => ({ type: INCREASE_BY, payload: diff })

const actions = { increase, decrease, increaseBy }

type CounterAction = ActionType<typeof actions>


type CounterState = {
  count: number
}

const initialState: CounterState = {
  count: 0
}

const counter = createReducer<CounterState, CounterAction>(initialState, {
  [INCREASE]: state => ({ count: state.count + 1}),
  [DECREASE]: state => ({ count: state.count - 1}),
  [INCREASE_BY]: (state, action) => ({ count: state.count + action.payload})

}) 
// const counter = (state: CounterState = initalState, action: CounterAction): CounterState => {
//   switch (action.type) {
//     case INCREASE:
//       return { count: state.count + 1 }
    
//     case DECREASE:
//       return { count: state.count - 1 }

//     case INCREASE_BY:
//       return { count: state.count + action.payload }

//     default:
//       return state
//   }
// }

export default counter



