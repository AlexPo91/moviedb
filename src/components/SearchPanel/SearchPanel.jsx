/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from "react"
import PropTypes from "prop-types"

const SearchPanel = ({
  searchMovie,
  setSearchMovie,
  getMovie,
  getPopularMovie,
  getPopularMovieInTheatre,
}) => {
  useEffect(() => {
    getPopularMovie(1)
    getPopularMovieInTheatre()
  })
  const handleSubmit = (e) => {
    e.preventDefault()
    setSearchMovie(e.target.value)
  }
  return (
    <div className="wrapper">
      <form>
        <input
          type="text"
          placeholder="Inter film"
          value={searchMovie}
          onChange={handleSubmit}
        />
        <button type="button" onClick={() => getMovie(searchMovie)}>
          Search
        </button>
      </form>
    </div>
  )
}
export default SearchPanel
SearchPanel.propTypes = {
  searchMovie: PropTypes.string.isRequired,
  setSearchMovie: PropTypes.func.isRequired,
  getMovie: PropTypes.func.isRequired,
  getPopularMovie: PropTypes.func.isRequired,
  getPopularMovieInTheatre: PropTypes.func.isRequired,
}
