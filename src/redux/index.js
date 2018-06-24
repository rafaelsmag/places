import { combineReducers } from 'redux'

import PlaceReducer from './reducers/places/'

const rootReducer = combineReducers({
  places: PlaceReducer,
})

export default rootReducer
