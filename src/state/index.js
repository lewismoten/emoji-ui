import { combineReducers } from 'redux'
import search from './search'

const reducers = {
  search
}

const rootReducer = combineReducers(reducers)

export default rootReducer
