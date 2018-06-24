import React from 'react'
import { Switch, Route } from 'react-router-dom'

import {
  HOME,
} from './../config/constants/appRoutes'
import NoMatch from './shared/containers/NoMatch'
import PlacesScreen from './places/containers/PlacesScreen';

const Router = props => (
  <Switch>
    <Route exact path={HOME} component={PlacesScreen} />
    <Route component={NoMatch} />
  </Switch>
)

export default Router
