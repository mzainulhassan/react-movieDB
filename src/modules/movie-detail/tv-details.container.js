import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {Grid, Row} from 'react-bootstrap';
import {AppBar} from 'material-ui';

import * as movieActions from '../movie-browser/movie-browser.actions';
import { white } from 'material-ui/styles/colors';
import CastList from './cast-list.component';

import { withRouter } from "react-router-dom";

class TvDetails extends PureComponent {

  componentDidMount() {
    const tv_id = this.props.location.state.detail.id;
    this.props.getTvDetails(tv_id);
    this.props.getTvCast(tv_id);
    window.onpopstate = this.handlePopState;
  }

  handlePopState = (event) => {
    window.location.reload();
  }


  render() {
    const {tvDetails} = this.props;
    const details = tvDetails.response;

    const {tvCast} = this.props;
    const cast = tvCast.response;

    var genres = "";
    var production = "";
    if(details != null && !tvDetails.isLoading)
    {
      for (let index = 0; index < details.genres.length; index++) {
        genres = genres + details.genres[index].name;
        if(index < details.genres.length-1)
        {
          genres = genres + ", ";
        }
      }

      for (let index = 0; index < details.production_companies.length; index++) {
        production = production + details.production_companies[index].name;
        if(index < details.production_companies.length-1)
        {
          production = production + ", ";
        }
      }
    }

    var castname = [];
    if(cast != null && !tvCast.isLoading)
    {
      for (let index = 0; index < cast.cast.length; index++) {
        castname.push(cast.cast[index]);
      }
    }

    return (
      <div>
        <AppBar title='Details'/>
        <Grid>
          <Row><img style={{marginTop:'10%'}} alt="" src={details==null?"": "https://image.tmdb.org/t/p/w300"+details.poster_path} /></Row>
          <Row><h1 style={{color:white,paddingTop:30}}>{details==null?"":details.name}</h1></Row>
          <Row><h5 style={{color:white,paddingTop:10,fontWeight:'bold'}}>Original Title:</h5><h5 style={{color:white,paddingLeft:20,paddingTop:10}}>{details==null?"":details.original_name}</h5></Row>
          <Row><h5 style={{color:white,paddingTop:10,fontWeight:'bold'}}>First Air Date:</h5><h5 style={{color:white,paddingLeft:20,paddingTop:10}}>{details==null?"":details.first_air_date}</h5></Row>          
          <Row><h5 style={{color:white,paddingTop:10,fontWeight:'bold'}}>Last Air Date:</h5><h5 style={{color:white,paddingLeft:20,paddingTop:10}}>{details==null?"":details.last_air_date}</h5></Row> 
          <Row><h5 style={{color:white,paddingTop:10,fontWeight:'bold'}}>Seasons:</h5><h5 style={{color:white,paddingLeft:20,paddingTop:10}}>{details==null?"":details.number_of_seasons}</h5></Row>
          <Row><h5 style={{color:white,paddingTop:10,fontWeight:'bold'}}>Episodes:</h5><h5 style={{color:white,paddingLeft:20,paddingTop:10}}>{details==null?"":details.number_of_episodes}</h5></Row>
          <Row><h5 style={{color:white,paddingTop:10,fontWeight:'bold'}}>Production:</h5><h5 style={{color:white,paddingLeft:20,paddingTop:10}}>{details==null?"":production}</h5></Row>
          <Row><h5 style={{color:white,paddingTop:10,fontWeight:'bold'}}>Genre:</h5><h5 style={{color:white,paddingLeft:20,paddingTop:10}}>{details==null?"":genres}</h5></Row>
          <Row><h5 style={{color:white,paddingTop:10,fontWeight:'bold'}}>User Rating:</h5><h5 style={{color:white,paddingLeft:20,paddingTop:10}}>{details==null?"":details.vote_average}</h5></Row>
          <Row><h5 style={{color:white,paddingTop:10,fontWeight:'bold'}}>Overview:</h5><p style={{textAlign:'left',color:white,paddingLeft:30}}>{details==null?"":details.overview}</p></Row>

          <Row><h5 style={{color:white,paddingTop:10,fontWeight:'bold'}}>Cast:</h5>
          <CastList casts={castname} isLoading={tvCast.isLoading} /></Row>
          
        </Grid>
      </div>
    );
  }
}

export default withRouter(connect(
  (state) => ({
    tvDetails: state.tvBrowser.tvDetails,
    tvCast: state.tvBrowser.tvCast
  }),
  { ...movieActions }
)(TvDetails));