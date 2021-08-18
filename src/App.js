import React from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import "./App.css"
import Header from "./components/Header"
import Films from "./pages/Films/Films"
import FoundFilmsContainer from "./pages/FoundFilms/FoundFilmsContainer"
// import SearchPanel from "./components/SearchPanel/SearchPanelContainer"
// import PopularMovie from "./components/PopularMovie/PopularMovieContainer"
import Home from "./pages/Home/Home"
import Serials from "./pages/Serials/Serials"

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/home" render={Home} />
        <Route path="/films">
          <Films />
        </Route>
        <Route path="/serials">
          <Serials />
        </Route>
        <Route path="/search=:query">
          <FoundFilmsContainer />
        </Route>
        <Redirect from="/" to="/home" />
      </Switch>
    </div>
  )
}

export default App
