import React, { Component } from 'react';
import './App.css';

import { black } from 'material-ui/styles/colors';
import MovieDetails from "./modules/movie-detail/movie-details.container";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class movieDetail extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <div style={{backgroundColor:black}}>
            <MovieDetails />
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default movieDetail;
