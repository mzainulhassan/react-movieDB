import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {Grid, Row} from 'react-bootstrap';
import {AppBar} from 'material-ui';

import * as movieActions from '../movie-browser.actions';
import * as movieHelpers from '../movie-browser.helper';
import MovieList from '../Lists/movie-list.component';
import { white } from 'material-ui/styles/colors';
import {Button} from "react-bootstrap";

var ten = [];
var movies = [];
var x = 10;

const styles = {
  morebutton: {
    marginBottom: 20,
    marginLeft: 30,
    marginRight: 30,
    width: '100%'
  },
}

class MovieBrowser extends PureComponent {
  
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1
    };
  }

  componentDidMount() {
    this.props.getTopMovies(this.state.currentPage);
  }

  handleClick = () => {
    const {topMovies} = this.props;
    if (!topMovies.isLoading) {  
      var nextPage = this.state.currentPage;
      if(x%20===0)
      {
        nextPage = this.state.currentPage + 1;
      }
      this.props.getTopMovies(nextPage);
      this.setState({currentPage: nextPage});
      x = x + 10;
      }
  }
  

  render() {
    const {topMovies} = this.props;
    movies = movieHelpers.getMoviesList(topMovies.response);
    if(movies != null && !topMovies.isLoading)
    {
      for (let index = x-10; index < (x); index++) {
        ten.push(movies[index]);
      }
    }

    return (
      <div>
        <AppBar title='Movies and TV'/>
        <Grid>
          <Row>
            <h1 style={{color:white,paddingLeft:30,paddingTop:30}}>Movies</h1>
            <MovieList movies={ten} isLoading={topMovies.isLoading} />
            <Button onClick={this.handleClick} hidden={movies==null?true:false} style={styles.morebutton} bsStyle="primary">Load More</Button>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default connect(
    (state) => ({
      topMovies: state.movieBrowser.topMovies
    }),
    { ...movieActions }
  )(MovieBrowser);