const MOVIE_DB_API_KEY = '3ea6dca00072d43ca3a1f7264b7fc237';
const MOVIE_DB_BASE_URL = 'https://api.themoviedb.org/3';

const createMovieDbUrl = (relativeUrl, queryParams) => {
    let baseUrl = `${MOVIE_DB_BASE_URL}${relativeUrl}?api_key=${MOVIE_DB_API_KEY}&language=en-US`;
    if (queryParams) {
      Object.keys(queryParams)
        .forEach(paramName => baseUrl += `&${paramName}=${queryParams[paramName]}`);
    }
    console.log(baseUrl);
    return baseUrl;
  }
  
  export const getTopMovies = async ({page}) => {
    const fullUrl = createMovieDbUrl('/movie/now_playing', {
      page
    });
    return fetch(fullUrl);
  }

  export const getTopTv = async ({page}) => {
    const fullUrl = createMovieDbUrl('/tv/on_the_air', {
      page
    });
    return fetch(fullUrl);
  }
  
  export const getMovieDetails = async ({movieId}) => {
    const fullUrl = createMovieDbUrl(`/movie/${movieId}`);
    return fetch(fullUrl);
  }

  export const getMovieCast = async ({movie_id}) => {
    const fullUrl = createMovieDbUrl(`/movie/${movie_id}/credits`);
    return fetch(fullUrl);
  }

  export const getTvDetails = async ({tv_id}) => {
    const fullUrl = createMovieDbUrl(`/tv/${tv_id}`);
    return fetch(fullUrl);
  }

  export const getTvCast = async ({tv_id}) => {
    const fullUrl = createMovieDbUrl(`/tv/${tv_id}/credits`);
    return fetch(fullUrl);
  }