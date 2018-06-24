import React, { Component } from 'react'; 
import { connect } from 'react-redux';
import PlacesSearch from '../components/PlacesSearch';
import { getPlacesResults, getLoading } from '../../../redux/selectors/PlacesSelectors';
import { fetchPlacesResultsAction } from '../../../redux/actions/async/placesAsyncActions';
import { PLACE_DETAILS } from '../../../config/constants/appRoutes';
import history from '../../../config/historyRouter';
import { savePlaceAction } from '../../../redux/actions/sync/placesSyncActions';

class PlacesScreen extends Component {

    state = {
        results: [],
        resultSelected: '',
    }

    onSearchChange = (value) => {
        this.props.fetchPlacesResults(value);
    }

    onResultSelected = (place) => {
        this.props.savePlaceSelected(place)
        history.push(PLACE_DETAILS);
    }

    render(){
        const { results, isLoading } = this.props;

        return <PlacesSearch 
            onSearchChange={this.onSearchChange}
            onResultSelected={this.onResultSelected}
            results={results}
            isLoading={isLoading}
        />
    }
}

const mapStateToProps = state => ({
    results: getPlacesResults(state),
    isLoading: getLoading(state),
})

const mapDispatchToProps = dispatch => ({
    fetchPlacesResults: query => dispatch(fetchPlacesResultsAction(query)),
    savePlaceSelected: place => dispatch(savePlaceAction(place)),
})
  
export default connect(mapStateToProps, mapDispatchToProps)(PlacesScreen)
  