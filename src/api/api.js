const url = "https://api.themoviedb.org/3/"
const API_KEY = "f793d60d48b42f2f9a8ba446212d3eea"

const movieDBApi = {
  getMovie(movie) {
    return fetch(
      `${url}search/multi?api_key=${API_KEY}&query=${movie}&language=ru`
    ).then((data) => data.json())
  },
  getPopularMovie(page) {
    return fetch(
      `${url}movie/popular/?api_key=${API_KEY}&page=${page}&language=ru-RU`
    ).then((data) => data.json())
  },
  getPopularMovieInTheatre() {
    return fetch(
      `${url}movie/now_playing?api_key=${API_KEY}&language=ru-US&page=1&region=ru`
    )
      .then((data) => data.json())
      .then((parseData) => parseData.results)
      .catch((e) => {
        console.log(`Error: ${e.message}`)
        console.log(e.response)
      })
  },
}

export default movieDBApi
