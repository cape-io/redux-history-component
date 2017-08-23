import { eq, get, isFunction, overArgs, stubTrue } from 'lodash/fp'
import { createStructuredSelector } from 'reselect'
import { getHref } from 'location-info'
import { createHistory } from 'redux-history-sync'
import { getRouteId } from 'cape-router'
// import { getLocation } from './util'

export const getIsActive = overArgs(eq, [getRouteId, get('routeId')])

export const mapStateToProps = createStructuredSelector({
  href: getHref,
  isActive: getIsActive,
  isInternal: stubTrue,
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
