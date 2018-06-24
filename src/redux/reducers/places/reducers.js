export function updatePlacesResults (state, { placesResults }) {
  return { ...state, placesResults }
}

export function setIsLoading (state, { isLoading }) {
  return { ...state, isLoading }
}

export function savePlaceSelected (state, { placeSelected }) {
  return { ...state, placeSelected }
}
  
export function updatePlaceDetails (state, { placeDetails }) {
  return { ...state, placeDetails }
}