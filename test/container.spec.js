import test from 'tape'

import { getHref, mapStateToProps } from '../src/container'

import { store } from './mock'

const state = store.getState()

test('getHref', (t) => {
  const href = getHref(state, { routeId: 'about' })
  t.equal(href, '/about')
  t.end()
})

// test('mapStateToProps() should', (t) => {
//   t.equal(mapStateToProps(state, { routeId: 'about' }).href, '/foo#xk', 'return object with href string.')
//   let props = { href: '/href', to: '/to' }
//   t.equal(mapStateToProps({}, props).href, '/href', 'pick href before to.')
//   props = { to: '/to/play' }
//   t.equal(mapStateToProps({}, props).href, '/to/play', 'work with `to` prop.')
//   t.end()
// })
