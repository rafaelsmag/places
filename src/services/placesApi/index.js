import axios from "axios";
import { SEARCH_PLACES, PLACE_DETAILS, FETCH_PHOTO } from "../../config/constants/apiRoutes";

export async function fetchPlaces(query){
    try{
    const detaFetched = await axios.get(SEARCH_PLACES(query.replace(' ', '+')));
    if(detaFetched.data.results){
        return detaFetched.data.results.map(item => ({
            placeId: item.place_id,
            title: item.name,
            description: item.formatted_address,
            image: item.icon,
        }));
    }
    return [];
    }catch(err){
        alert(err);
    }
}

export async function fetchPlaceDetails(placeId){
    try{
    const detaFetched = await axios.get(PLACE_DETAILS(placeId));
    const { result } = detaFetched.data;

    let photo = '';
    // console.log(result.photos.length)
    // if(result.photos.length > 0){
    //     const photoResult = await axios.get(FETCH_PHOTO(result.photos[0].photo_reference));
    // }

    return {
        rating: result.rating,
        weekday: result.opening_hours ? result.opening_hours.weekday_text : '',
        photo: photo,
        url: result.url,
        address: result.formatted_address,
        website: result.website,
        name: result.name
    }
    }catch(err){
        alert(err);
    }
}