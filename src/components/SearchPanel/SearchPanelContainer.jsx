import { connect } from "react-redux"
import SearchPanel from "./SearchPanel"
import {
  setSearchMovieAC,
  getMovieAsync,
  getPopularMovieAsync,
  getPopularMovieInTheatreAsync,
} from "../../redux/movieDBReducer"

const mapStateToProps = (state) => ({
  searchMovie: state.movieApp.searchMovie,
})
const mapDispatchToProps = (dispatch) => ({
  setSearchMovie(movie) {
    dispatch(setSearchMovieAC(movie))
  },
  getMovie(movie) {
    dispatch(getMovieAsync(movie))
  },
  getPopularMovie(page) {
    dispatch(getPopularMovieAsync(page))
  },
  getPopularMovieInTheatre() {
    dispatch(getPopularMovieInTheatreAsync())
  },
})
const SearchPanelContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchPanel)
export default SearchPanelContainer
