import React from 'react';
import {Row, Col} from 'react-bootstrap';
import CastCard from './cast-card.component';

const styles = {
  castColumn: {
    marginBottom: 20,
    paddingLeft: 50,
    paddingRight: 50
  },
}

const CastListComponent = ({casts, isLoading}) => {
  const castColumns = casts ? casts.map(cast => (
    <Col style={styles.movieColumn} key={cast.id} xs={12} sm={6} md={6} lg={2}>
      <CastCard cast={cast} />
    </Col>
  )) : null;

  return (
    <Row>
      {castColumns}
    </Row>
  );
}
export default CastListComponent;