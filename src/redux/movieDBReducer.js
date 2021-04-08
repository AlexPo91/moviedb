import movieDBApi from "../api/api"

const SET_SEARCH_MOVIE = "SET_SEARCH_MOVIE"
const GET_MOVIES = "GET_MOVIES"
const GET_POPULAR_MOVIES = "GET_POPULAR_MOVIES"
const GET_POPULAR_MOVIES_IN_THEATRE = "GET_POPULAR_MOVIES_IN_THEATRE"

const initialState = {
  searchMovie: "",
  movies: null,
  popularMovies: null,
  popularMoviesInTheatre: null,
}

const movieDBReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_MOVIE:
      return {
        ...state,
        searchMovie: action.movie,
      }
    case GET_MOVIES:
      return {
        ...state,
        movies: action.movies,
      }
    case GET_POPULAR_MOVIES:
      return {
        ...state,
        popularMovies: action.movies,
      }
    case GET_POPULAR_MOVIES_IN_THEATRE:
      return {
        ...state,
        popularMoviesInTheatre: action.movies,
      }
    default:
      return state
  }
}
export const setSearchMovieAC = (movie) => ({
  type: SET_SEARCH_MOVIE,
  movie,
})
export const getMoviesAC = (movies) => ({
  type: GET_MOVIES,
  movies,
})
export const getPopularMoviesAC = (movies) => ({
  type: GET_POPULAR_MOVIES,
  movies,
})
export const getPopularMoviesInTheatreAC = (movies) => ({
  type: GET_POPULAR_MOVIES_IN_THEATRE,
  movies,
})
export const getMovieAsync = (movie) => (dispatch) =>
  movieDBApi.getMovie(movie).then((data) => {
    console.log(data)
    dispatch(getMoviesAC(data))
  })
export const getPopularMovieAsync = (page) => (dispatch) =>
  movieDBApi.getPopularMovie(page).then((data) => {
    console.log(data)
    dispatch(getPopularMoviesAC(data))
  })
export const getPopularMovieInTheatreAsync = () => (dispatch) =>
  movieDBApi.getPopularMovieInTheatre().then((data) => {
    console.log(data)
    dispatch(getPopularMoviesInTheatreAC(data))
  })

export default movieDBReducer
