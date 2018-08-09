import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {Grid, Row} from 'react-bootstrap';
import {AppBar} from 'material-ui';

import * as movieActions from '../movie-browser/movie-browser.actions';
import { white } from 'material-ui/styles/colors';
import CastList from './cast-list.component';

import { withRouter } from "react-router-dom";

class MovieDetails extends PureComponent {

  componentDidMount() {
    const movie_id = this.props.location.state.detail.id;
    this.props.getMovieDetails(movie_id);
    this.props.getMovieCast(movie_id);
    window.onpopstate = this.handlePopState;
  }

  handlePopState = (event) => {
    window.location.reload();
  }


  render() {
    const {movieDetails} = this.props;
    const details = movieDetails.response;

    const {movieCast} = this.props;
    const cast = movieCast.response;

    var genres = "";
    if(details != null && !movieDetails.isLoading)
    {
      for (let index = 0; index < details.genres.length; index++) {
        genres = genres + details.genres[index].name;
        if(index < details.genres.length-1)
        {
          genres = genres + ", ";
        }
      }
    }

    var castname = [];
    if(cast != null && !movieCast.isLoading)
    {
      for (let index = 0; index < 5; index++) {
        castname.push(cast.cast[index]);
      }
    }

    return (
      <div>
        <AppBar title='Details'/>
        <Grid>
          <Row><img style={{marginTop:'10%'}} alt="" src={details==null?"": "https://image.tmdb.org/t/p/w300"+details.poster_path} /></Row>
          <Row><h1 style={{color:white,paddingTop:30}}>{details==null?"":details.title}</h1></Row>
          <Row><h5 style={{color:white,paddingTop:10,fontWeight:'bold'}}>Original Title:</h5><h5 style={{color:white,paddingLeft:20,paddingTop:10}}>{details==null?"":details.original_title}</h5></Row>
          <Row><h5 style={{color:white,paddingTop:10,fontWeight:'bold'}}>Tag:</h5><h5 style={{color:white,paddingLeft:20,paddingTop:10}}>{details==null?"":details.tagline}</h5></Row>
          <Row><h5 style={{color:white,paddingTop:10,fontWeight:'bold'}}>Release Date:</h5><h5 style={{color:white,paddingLeft:20,paddingTop:10}}>{details==null?"":details.release_date}</h5></Row>
          <Row><h5 style={{color:white,paddingTop:10,fontWeight:'bold'}}>Runtime:</h5><h5 style={{color:white,paddingLeft:20,paddingTop:10}}>{details==null?"":details.runtime}</h5></Row>
          <Row><h5 style={{color:white,paddingTop:10,fontWeight:'bold'}}>Genre:</h5><h5 style={{color:white,paddingLeft:20,paddingTop:10}}>{details==null?"":genres}</h5></Row>
          <Row><h5 style={{color:white,paddingTop:10,fontWeight:'bold'}}>User Rating:</h5><h5 style={{color:white,paddingLeft:20,paddingTop:10}}>{details==null?"":details.vote_average}</h5></Row>
          <Row><h5 style={{color:white,paddingTop:10,fontWeight:'bold'}}>Overview:</h5><p style={{textAlign:'left',color:white,paddingLeft:30}}>{details==null?"":details.overview}</p></Row>

          <Row><h5 style={{color:white,paddingTop:10,fontWeight:'bold'}}>Cast:</h5>
          <CastList casts={castname} isLoading={movieCast.isLoading} /></Row>
          
        </Grid>
      </div>
    );
  }
}

export default withRouter(connect(
  (state) => ({
    movieDetails: state.movieBrowser.movieDetails,
    movieCast: state.movieBrowser.movieCast
  }),
  { ...movieActions }
)(MovieDetails));