/* eslint-disable camelcase */
import React from "react"
import PropTypes from "prop-types"
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Autoplay } from "swiper"
import styles from "./styles.module.css"
import MovieItem from "./MovieItem/MovieItem"

SwiperCore.use([Autoplay])

const PopularMovie = ({ popularMoviesInTheatre }) => {
  const movies = popularMoviesInTheatre

  return (
    <div className={styles.PopularMovie}>
      <div className="wrapper">
        <h2>Что популярно</h2>
        <Swiper
          spaceBetween={50}
          slidesPerView={7}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          autoplay
        >
          {movies.map(
            ({ id, poster_path, title, release_date, vote_average }) => (
              <SwiperSlide key={id}>
                <MovieItem
                  key={id}
                  posterPath={poster_path}
                  title={title}
                  releaseDate={release_date}
                  voteAverage={vote_average}
                />
              </SwiperSlide>
            )
          )}
        </Swiper>
      </div>
    </div>
  )
}

export default PopularMovie
PopularMovie.propTypes = {
  popularMoviesInTheatre: PropTypes.arrayOf(PropTypes.shape).isRequired,
}
