import React from "react"
import "./App.css"
import Header from "./components/Header"
import SearchPanel from "./components/SearchPanel/SearchPanelContainer"
import PopularMovie from "./components/PopularMovie/PopularMovieContainer"

function App() {
  return (
    <div className="App">
      <Header />
      <SearchPanel />
      <PopularMovie />
    </div>
  )
}

export default App
