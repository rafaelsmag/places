import React, { Component } from 'react'; 
import { connect } from 'react-redux';
import { Loader } from '../../shared/components/Loading';
import { PlaceDetails } from '../components/PlaceDetails';
import { getLoading, getPlaceDetails, getPlaceSelected } from '../../../redux/selectors/PlacesSelectors';
import { fetchPlaceDetailsAction } from '../../../redux/actions/async/placesAsyncActions';

class PlaceDetailsScreen extends Component {

    state = {
        mounted: false
    }

   componentDidMount() {
       this.props.fetchPlaceDetails(this.props.place)
       this.setState({
           mounted: true
       })
   }

    render(){
        const { isLoading, placeDetails } = this.props;
        const { mounted } = this.state;

        return (isLoading && typeof placeDetails === 'undefined')
        ? <Loader/> 
        : <PlaceDetails
            place={placeDetails}
        />
    }
}

const mapStateToProps = state => ({
    isLoading: getLoading(state),
    placeDetails: getPlaceDetails(state),
    place: getPlaceSelected(state)
})

const mapDispatchToProps = dispatch => ({
    fetchPlaceDetails: place => dispatch(fetchPlaceDetailsAction(place)),
})
  
export default connect(mapStateToProps, mapDispatchToProps)(PlaceDetailsScreen)
  