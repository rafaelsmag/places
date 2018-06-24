import React from 'react'
import { Switch, Route } from 'react-router-dom'

import {
  HOME, PLACE_DETAILS,
} from './../config/constants/appRoutes'
import NoMatch from './shared/containers/NoMatch'
import PlacesScreen from './places/containers/PlacesScreen';
import PlaceDetailsScreen from './places/containers/PlaceDetailsScreen';

const Router = props => (
  <Switch>
    <Route exact path={HOME} component={PlacesScreen} />
    <Route exact path={PLACE_DETAILS} component={PlaceDetailsScreen} />    
    <Route component={NoMatch} />
  </Switch>
)

export default Router
