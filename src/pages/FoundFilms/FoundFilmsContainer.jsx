import { connect } from "react-redux"
import { useParams } from "react-router-dom"
import React, { useEffect } from "react"
import PropTypes from "prop-types"
import FoundFilms from "./FoundFilms"

import { getMovieAsync } from "../../redux/movieDBReducer"

const mapStateToProps = (state) => ({
  searchMovie: state.movieApp.searchMovie,
})

const mapDispatchToProps = (dispatch) => ({
  getMovie: (movie) => dispatch(getMovieAsync(movie)),
})

const FoundFilmsWithUrl = ({ getMovie }) => {
  const { query } = useParams()
  useEffect(() => {
    getMovie(query)
  }, [])

  return <FoundFilms />
}
const FoundFilmsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FoundFilmsWithUrl)
export default FoundFilmsContainer

FoundFilmsWithUrl.propTypes = {
  getMovie: PropTypes.func.isRequired,
}
