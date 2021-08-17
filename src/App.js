import React from "react"
import { Switch, Route, BrowserRouter } from "react-router-dom"
import "./App.css"
import Header from "./components/Header"
import Films from "./pages/Films"
import FoundFilms from "./pages/FoundFilms"
// import SearchPanel from "./components/SearchPanel/SearchPanelContainer"
// import PopularMovie from "./components/PopularMovie/PopularMovieContainer"
import Home from "./pages/Home"
import Serials from "./pages/Serials"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/films">
            <Films />
          </Route>
          <Route path="/serials">
            <Serials />
          </Route>
          <Route path="/search?query=">
            <FoundFilms />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
