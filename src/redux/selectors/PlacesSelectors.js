export const getPlacesResults = (state) => {
    return state.places.placesResults;
}

export const getLoading = (state) => {
    return state.places.isLoading;
}

export const getPlaceDetails = (state) => {
    return state.places.placeDetails;
}

export const getPlaceSelected = (state) => {
    return state.places.placeSelected;
}