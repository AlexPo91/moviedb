/* eslint-disable no-underscore-dangle */
import { createStore, combineReducers, applyMiddleware, compose } from "redux"
import thunkMiddleWare from "redux-thunk"
import movieDBReducer from "./movieDBReducer"

const reducers = combineReducers({
  movieApp: movieDBReducer,
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  reducers,
  // eslint-disable-next-line no-underscore-dangle
  //   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  composeEnhancers(applyMiddleware(thunkMiddleWare))
)
window.store = store

export default store
