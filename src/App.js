import React, { Component } from 'react';
import './App.css';

import MovieBrowser from './modules/movie-browser/Container/movie-browser.container';
import TvBrowser from './modules/movie-browser/Container/tv-browser.container';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { black } from 'material-ui/styles/colors';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <div style={{backgroundColor:black}}>
            <MovieBrowser />
            <TvBrowser />
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
