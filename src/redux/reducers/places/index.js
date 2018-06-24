import {
    UPDATE_PLACES_RESULTS, SET_IS_LOADING, PLACE_SELECTED, UPDATE_PLACE_DETAILS
  } from './../../types/PlacesTypes'
import { setIsLoading, updatePlacesResults, savePlaceSelected, updatePlaceDetails } from './reducers'
  
  const INITIAL_STATE = {
    placesResults: [],
    placeSelected: {},
    isLoading: false,
    placeDetails: {},
  }
  
  export default (state = INITIAL_STATE, action = {}) => {
    switch (action.type) {
      case UPDATE_PLACES_RESULTS:
        return updatePlacesResults(state, action)
      case SET_IS_LOADING: 
        return setIsLoading(state, action)
      case PLACE_SELECTED: 
        return savePlaceSelected(state, action)
      case UPDATE_PLACE_DETAILS:
        return updatePlaceDetails(state, action)
      default:
        return state
    }
  }
  