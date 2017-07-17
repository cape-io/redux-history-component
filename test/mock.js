import { reduce } from 'lodash'
import { combineReducers, createStore } from 'redux'
import locInfo, { addRoute, addRoutes } from 'location-info'
import { historyReducer as history } from 'redux-history-sync'

// If not saved in a database/persistent store...
export const routeActions = [
  addRoutes({
    home: '/',
    about: '/about',
    member: '/home-drawer/:id',
    image: '/image-upload',
  }),
  addRoute('dat', '/feed/me'),
  addRoutes(['foo', 'bar']),
]
export const historyState = {
  index: 1,
  id: 'cra6ls8zpg2glcp611yvi',
  location: {
    hash: '',
    hostname: 'localhost',
    origin: 'http://localhost:3000',
    pathname: '/',
    port: '3000',
    protocol: 'http:',
    search: '',
  },
  title: 'Site Title Here',
}
export const initState = {
  history: historyState,
  locInfo: reduce(routeActions, locInfo, undefined),
}
export const reducer = combineReducers({
  history,
  locInfo,
})
export const store = createStore(reducer, initState)

export const location = {
  some: 'stuff',
  more: 'things',
  hash: '#xk',
  pathname: '/foo',
}
export const historyNull = {
  state: null,
}
