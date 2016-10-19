import isFunction from 'lodash/isFunction'
import { createHistory, locationSerialize } from 'redux-history-sync'
import { getLocation } from './util'

export function mapStateToProps(state, ownProps) {
  return {
    href: ownProps.href || ownProps.to || locationSerialize(ownProps),
  }
}

// @TODO Enable link to optionally call HISTORY_RESTORE action.
export function mapDispatchToProps(dispatch, ownProps) {
  // This is called on click.
  function handleClick(event) {
    event.preventDefault()
    const loc = getLocation(ownProps)
    if (isFunction(ownProps.onClick)) {
      ownProps.onClick(loc)
    }
    // Dispatch our event.
    return dispatch(createHistory(loc))
  }
  return {
    onClick: handleClick,
  }
}
