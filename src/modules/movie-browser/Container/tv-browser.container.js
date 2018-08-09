import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {Grid, Row} from 'react-bootstrap';

import * as movieActions from '../movie-browser.actions';
import * as movieHelpers from '../movie-browser.helper';
import TvList from '../Lists/tv-list.component';
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

class TvBrowser extends PureComponent {
  
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1
    };
  }
  componentDidMount() {
    this.props.getTopTv(this.state.currentPage);
  }

  handleClick = () => {
    const {topTvs} = this.props;
    if (!topTvs.isLoading) {
      var nextPage = this.state.currentPage;
      if(x%20===0)
      {
        nextPage = this.state.currentPage + 1;
      }
      this.props.getTopTv(nextPage);
      this.setState({currentPage: nextPage});
      x = x + 10;
      }
  }
  

  render() {
      const {topTvs} = this.props;
      movies = movieHelpers.getMoviesList(topTvs.response);

      if(movies != null && !topTvs.isLoading)
      {
        for (let index = x-10; index < (x); index++) {
          ten.push(movies[index]);
        }
      }

      return (
        <div>
          <Grid>
            <Row>
              <h1 style={{color:white,paddingLeft:30,paddingTop:30}}>Tv Shows</h1>
              <TvList movies={ten} isLoading={topTvs.isLoading} />
              <Button onClick={this.handleClick} hidden={movies==null?true:false} style={styles.morebutton} bsStyle="primary">Load More</Button>
            </Row>
          </Grid>
        </div>
      );
  }
}

export default connect(
    (state) => ({
      topTvs: state.tvBrowser.topTvs
    }),
    { ...movieActions }
  )(TvBrowser);