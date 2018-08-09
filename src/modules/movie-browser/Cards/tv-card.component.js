import React from 'react';

import {Card, CardTitle, CardMedia} from 'material-ui';
import { withRouter } from "react-router-dom";


const styles = {
  cardTitle: {
    textOverflow: 'ellipsis',
    overflow: 'hidden',
  },

  cardMedia: {
    maxHeight: 350,
    overflow: 'hidden'
  },

  card: {
    cursor: 'pointer',
    height: 'auto',
    overflow: 'hidden',
    padding: '1%'
  },
  bgImage: {
    width: '100%'
  }
};



class TvCardComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isMouseOver: false
    };
  }

    render() {

    const {movie} = this.props;

    return (

      <Card
        style={styles.card}
        onMouseOver={() => this.setState({isMouseOver: true})}
        onMouseLeave={() => this.setState({isMouseOver: false})}
        onClick= {() => this.props.history.push({
          pathname: '/detail/tv',
          state: { detail: movie }
        })}
      >

        <CardMedia

          style={styles.cardMedia}
          overlay={
            <CardTitle title={<div style={styles.cardTitle}>{movie.name}</div>} />
          }
        >
          <img alt="" style={styles.bgImage} src={movie.poster_path} />
        </CardMedia>
      </Card>
    );
  }
}

export default withRouter(TvCardComponent);