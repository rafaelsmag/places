import React from 'react'
import { Grid, Card, Rating } from 'semantic-ui-react';

const renderRating = (rating) => <Rating defaultRating={rating} maxRating={5} disabled/>;
const renderCardDescription = (weekday) => weekday.map(item => <Card.Description>{item}</Card.Description>)

export const PlaceDetails = ({ place }) => {
  if(typeof place === 'undefined'){
    return null;
  }
  const { name, website, address, url, photo, weekday, rating } = place;
  return (
    <Grid centered columns={1}>
      <Grid.Column mobile={16} tablet={14} computer={14}>
      <Card fluid>
        <Card.Content>
          <Card.Header>{name}</Card.Header>
          <Card.Meta>{website && <a href={website}>{website}</a> }</Card.Meta>
          {Array.isArray(weekday) && renderCardDescription(weekday)}
        </Card.Content>
        <Card.Content extra>
          {renderRating(rating)}
        </Card.Content>
      </Card>
      </Grid.Column>
    </Grid>
  )
}
