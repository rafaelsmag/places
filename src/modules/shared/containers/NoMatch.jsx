import React from 'react'
import { Grid } from 'semantic-ui-react'

const NoMatch = (props) => {
  return (
    <Grid centered columns={1}>
      <Grid.Column mobile={16} tablet={14} computer={14}>
        <h1>
          Page Not Found
        </h1>
      </Grid.Column>
    </Grid>
  )
}

export default NoMatch
