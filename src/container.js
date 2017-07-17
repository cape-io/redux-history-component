import { eq, get, isFunction, overArgs } from 'lodash/fp'
import { createStructuredSelector } from 'reselect'
import { selectRoutes } from 'location-info'
import { createHistory } from 'redux-history-sync'
import { getRouteId } from 'cape-routes'
// import { getLocation } from './util'

// @TODO Move this to location-info
export function getHref(state, { routeId, ...props }) {
  const pattern = get([routeId, 'pattern'], selectRoutes(state))
  if (!pattern) { // Throw?
    console.error(routeId, 'route not found')
    return routeId
  }
  return pattern.stringify(props)
}
export const getIsActive = overArgs(eq, [getRouteId, get('routeid')])

export const mapStateToProps = createStructuredSelector({
  href: getHref,
  isActive: getIsActive,
})
export function doCreateHistory(props) {
  return (dispatch, getState) => dispatch(createHistory(getHref(getState(), props)))
}
export function createOnClick(dispatch, ownProps) {
  return (event) => {
    event.preventDefault()
    const { onClick, ...props } = ownProps
    if (isFunction(onClick)) onClick(ownProps)
    return dispatch(doCreateHistory(props))
  }
}
// @TODO Enable link to optionally call HISTORY_RESTORE action.
export function mapDispatchToProps(dispatch, ownProps) {
  return {
    onClick: createOnClick(dispatch, ownProps),
  }
}
