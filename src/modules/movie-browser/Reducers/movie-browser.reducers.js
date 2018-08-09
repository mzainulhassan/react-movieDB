import {combineReducers} from 'redux';
import { createAsyncReducer } from '../../common/redux.helpers';

import { keys as movieActionKeys } from '../movie-browser.actions';

const moviesSuccessReducer = (state, action) => {
  const existingMovies = state.response ? state.response.results : [];
  var flag = false;

  var old_length = existingMovies.length;
  var new_length = action.response.results.length;

  if (old_length === 0) {flag = false;}

  else if (old_length === new_length)
  {
    for (var x in action.response.results)
    {
      if(existingMovies[x].id === action.response.results[x].id)
      {
        flag = true;
      }
    }
  }  
    
  else
  {
    let index1 = 0;
    for (let index = old_length-20; index < old_length; index++) {
      if(existingMovies[index].id === action.response.results[index1].id)
      {
        flag = true;
      }
      index1++;
    }
  }

  if(flag)
  {
    return {
      ...state,
      isLoading: false,
      response: {
        ...action.response,
        results: [
          ...existingMovies,
        ]
      }
    };
  }
  else
  {
    return {
      ...state,
      isLoading: false,
      response: {
        ...action.response,
        results: [
          ...existingMovies,
          ...action.response.results
        ]
      }
    };
  }
}

const movieBrowserReducer = combineReducers({

  topMovies: createAsyncReducer(movieActionKeys.GET_TOP_MOVIES, {
    [`${movieActionKeys.GET_TOP_MOVIES}_SUCCESS`]: moviesSuccessReducer
  }),

  movieDetails: createAsyncReducer(movieActionKeys.GET_MOVIE_DETAILS),

  movieCast: createAsyncReducer(movieActionKeys.GET_MOVIE_CAST),
});

export default movieBrowserReducer;