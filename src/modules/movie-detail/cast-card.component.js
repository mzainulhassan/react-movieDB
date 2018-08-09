import React from 'react';
import {Card, CardTitle, CardMedia} from 'material-ui';

const styles = {
  cardTitle: {
    fontWeight:'bold',
    fontSize:' 16px',
  },

  cardCharacter: {
    fontSize:' 14px',
  },

  cardMedia: {
    maxHeight: 350,
    overflow: 'hidden'
  },

  card: {
    height: 'auto',
    overflow: 'hidden',
    padding: '1%',
    marginTop: '2%'
  },
  bgImage: {
    width: '100%'
  }
};



class CastCardComponent extends React.Component {

  render() {
    const {cast} = this.props;
    return (
      <Card style={styles.card}>
        <CardMedia style={styles.cardMedia}>
          <img alt="" style={styles.bgImage} src={"https://image.tmdb.org/t/p/w276_and_h350_face"+cast.profile_path} />
        </CardMedia>
        <CardTitle title={<div style={styles.cardTitle}>{cast.name}</div>} />
        <CardTitle title={<div style={styles.cardCharacter}>{cast.character}</div>} />
      </Card>
    );
  }
}

export default CastCardComponent;