import { fetchPlaces, fetchPlaceDetails } from "../../../services/placesApi";
import { updatePlacesResults, setLoading, updatePlaceDetails } from "../sync/placesSyncActions";


export function fetchPlacesResultsAction(query) {
    return async (dispatch) => {
      try {
        dispatch(setLoading(true))

        const results = await fetchPlaces(query)
        dispatch(updatePlacesResults(results))
        dispatch(setLoading(false))        
      } catch (err) {
        dispatch(setLoading(false))
        alert(err)
      }
    }
}

  export function fetchPlaceDetailsAction(place) {
    return async (dispatch) => {
      try {
        dispatch(setLoading(true))
        const placeDetails = await fetchPlaceDetails(place.placeId)
        dispatch(updatePlaceDetails(placeDetails))
        dispatch(setLoading(false))        
      } catch (err) {
        dispatch(setLoading(false))
        alert(err)
      }
    }
}