import React from "react"
import PropTypes from "prop-types"
import CanvasComponnent from "./CanvasComponent"
import styles from "./styles.module.css"

const MovieItem = ({ posterPath, title, releaseDate, voteAverage }) => (
  <div className={styles.movie__item}>
    <img
      src={`https://image.tmdb.org/t/p/w300${posterPath}`}
      height="210px"
      alt=""
    />

    <div className={styles.vote__average}>
      <span>{voteAverage}</span>
      <CanvasComponnent voteAverage={voteAverage} />
    </div>
    <h4>{title}</h4>
    <span>{releaseDate}</span>
  </div>
)

export default MovieItem
MovieItem.propTypes = {
  posterPath: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  voteAverage: PropTypes.number.isRequired,
}
