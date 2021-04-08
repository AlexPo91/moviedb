import React from "react"
import "./App.css"
import Header from "./components/Header"
import SearchPanel from "./components/SearchPanel/SearchPanelContainer"

function App() {
  return (
    <div className="App">
      <Header />
      <SearchPanel />
    </div>
  )
}

export default App
