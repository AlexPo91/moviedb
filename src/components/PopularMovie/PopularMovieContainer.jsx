import { connect } from "react-redux"
import React, { useEffect } from "react"
import PropTypes from "prop-types"
import PopularMovie from "./PopularMovie"

import { getPopularMovieInTheatreAsync } from "../../redux/movieDBReducer"

const PopularMovieContainer = ({
  getPopularMovieInTheatre,
  popularMoviesInTheatre,
}) => {
  useEffect(() => {
    getPopularMovieInTheatre()
  }, [])
  return popularMoviesInTheatre ? (
    <PopularMovie popularMoviesInTheatre={popularMoviesInTheatre} />
  ) : null
}

const mapStateToProps = (state) => ({
  popularMoviesInTheatre: state.movieApp.popularMoviesInTheatre,
})

const mapDispatchToProps = (dispatch) => ({
  getPopularMovieInTheatre() {
    dispatch(getPopularMovieInTheatreAsync())
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PopularMovieContainer)
PopularMovieContainer.propTypes = {
  getPopularMovieInTheatre: PropTypes.func.isRequired,
  popularMoviesInTheatre: PropTypes.arrayOf(PropTypes.shape),
}
PopularMovieContainer.defaultProps = {
  popularMoviesInTheatre: "null",
}
