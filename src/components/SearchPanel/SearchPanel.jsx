/* eslint-disable react/jsx-props-no-spreading */
import React from "react"
import PropTypes from "prop-types"
// import { Link } from "react-router-dom"
import { useHistory } from "react-router-dom"
import styles from "./styles.module.css"

const SearchPanel = ({
  searchMovie,
  setSearchMovie,
  // getMovie
}) => {
  const history = useHistory()
  const handleSubmit = (e) => {
    e.preventDefault()
    setSearchMovie(e.target.value)
  }
  return (
    <section className={styles.searchPanel}>
      <div className="wrapper">
        <div className={styles.searchPanel__main}>
          <div className={styles.title}>
            <h2>Добро пожаловать.</h2>
            <h3>Миллионы фильмов, сериалов и людей. Исследуйте сейчас.</h3>
          </div>
          <form
            className={styles.formSearch}
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              className={styles.inputSearch}
              type="text"
              placeholder="Inter film"
              value={searchMovie}
              onChange={handleSubmit}
            />
            <input
              className={styles.buttonSearch}
              type="submit"
              onClick={(e) => {
                e.preventDefault()
                history.push(`/search=${searchMovie}`)
              }}
              value="Search"
            />
          </form>
        </div>
      </div>
    </section>
  )
}
export default SearchPanel
SearchPanel.propTypes = {
  searchMovie: PropTypes.string.isRequired,
  setSearchMovie: PropTypes.func.isRequired,
  // getMovie: PropTypes.func.isRequired,
}
