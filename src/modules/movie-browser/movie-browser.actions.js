import {createAsyncActionCreator} from '../common/redux.helpers';
import * as movieService from './movie-browser.service';

export const keys = {
  'GET_TOP_MOVIES': 'GET_TOP_MOVIES',
  'GET_MOVIE_DETAILS': 'GET_MOVIE_DETAILS',
  'GET_MOVIE_CAST': 'GET_MOVIE_CAST',
  'GET_TOP_TV': 'GET_TOP_TV',
  'GET_TV_DETAILS': 'GET_TV_DETAILS',
  'GET_TV_CAST': 'GET_TV_CAST',
};

export const getTopMovies = (page) => createAsyncActionCreator(
  keys.GET_TOP_MOVIES,
  movieService.getTopMovies, 
  {page}
);

export const getMovieDetails = (movieId) => createAsyncActionCreator(
  keys.GET_MOVIE_DETAILS,
  movieService.getMovieDetails, 
  {movieId}
);

export const getMovieCast = (movie_id) => createAsyncActionCreator(
  keys.GET_MOVIE_CAST,
  movieService.getMovieCast, 
  {movie_id}
);


export const getTopTv = (page) => createAsyncActionCreator(
  keys.GET_TOP_TV,
  movieService.getTopTv, 
  {page}
);

export const getTvDetails = (tv_id) => createAsyncActionCreator(
  keys.GET_TV_DETAILS,
  movieService.getTvDetails, 
  {tv_id}
);

export const getTvCast = (tv_id) => createAsyncActionCreator(
  keys.GET_TV_CAST,
  movieService.getTvCast,
  {tv_id}
);