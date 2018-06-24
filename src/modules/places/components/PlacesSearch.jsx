import React, { Component } from 'react'
import _ from 'lodash'
import { Search, Grid } from 'semantic-ui-react'
import { Span } from 'glamorous'


export default class PlacesSearch extends Component {

    state = {
        value: '',
    }

  handleResultSelect = (e, { result }) => { 
    this.props.onResultSelected(result)
  }

  handleSearchChange = (e, { value }) => {
   this.props.onSearchChange(value);
  }

  render() {
    const { isLoading, value, results } = this.props
    return (
        <Grid columns={1} centered stretched>
        <Grid.Column mobile={16} tablet={8} computer={5}>
          <Span css={styles.textTitle}>Search a place: </Span>
          <Search
            loading={isLoading}
            fluid
            onResultSelect={this.handleResultSelect}
            onSearchChange={_.debounce(this.handleSearchChange, 1000, { leading: true })}
            results={results}
            value={value}
          />
        </Grid.Column>
      </Grid>
    )
  }
}

const styles = {
  textTitle: {
    marginTop: '30px',
    marginBottom: '10px',
    fontSize: '2em',
    lineHeight: '1.1',
    color: '#fff',
  }
}