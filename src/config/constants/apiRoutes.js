const API_KEY = 'AIzaSyB9X7b10nGI8Gw6L9CG5e3di7AmolquJe0'
export const SEARCH_PLACES = (query) => `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${query}&type=restaurant&key=${API_KEY}`
export const PLACE_DETAILS = (placeId) => `https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&key=${API_KEY}`
export const FETCH_PHOTO = (reference) => `https://maps.googleapis.com/maps/api/place/photo?photoreference=${reference}&key=${API_KEY}`