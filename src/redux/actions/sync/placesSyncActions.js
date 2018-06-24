import { UPDATE_PLACES_RESULTS, SET_IS_LOADING, PLACE_SELECTED, UPDATE_PLACE_DETAILS } from "../../types/PlacesTypes";


export const updatePlacesResults = (placesResults) => ({ type: UPDATE_PLACES_RESULTS, placesResults })
export const setLoading = (isLoading) => ({ type: SET_IS_LOADING, isLoading })
export const savePlaceAction = (placeSelected) => ({ type: PLACE_SELECTED, placeSelected })
export const updatePlaceDetails = (placeDetails) => ({ type: UPDATE_PLACE_DETAILS, placeDetails })
