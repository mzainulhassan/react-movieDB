import React from 'react';
import {Row, Col} from 'react-bootstrap';
import TvCard from '../Cards/tv-card.component';

const styles = {
  movieColumn: {
    marginBottom: 20,
    paddingLeft: 50,
    paddingRight: 50
  },
}

const TvListComponent = ({movies, isLoading}) => {
  const movieColumns = movies ? movies.map(movie => (
    <Col style={styles.movieColumn} key={movie.id} xs={12} sm={6} md={6} lg={3}>
      <TvCard movie={movie} />
    </Col>
  )) : null;

  return (
    <Row>
      {movieColumns}
    </Row>
  );
}
export default TvListComponent;