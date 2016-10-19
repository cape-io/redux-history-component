import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import classnames from 'classnames'
import isFunction from 'lodash/isFunction'
import { create, locationSerialize, parseUrl } from 'redux-history-sync'

// Really simple Link component to help transition from react-router.

export function mapStateToProps(state, ownProps) {
  return {
    href: ownProps.href || ownProps.to || locationSerialize(ownProps),
  }
}

export function getLocation({ to, href, ...location }) {
  return {
    ...parseUrl(to || href),
    ...location,
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
    return dispatch(create(loc))
  }
  return {
    onClick: handleClick,
  }
}

// Simply attaches the dispatch wrapped handleClick() above.
function Link({ active, children, className, ...props }) {
  return (
    <a className={classnames({ active }, className)} {...props}>
      {children}
    </a>
  )
}
Link.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
}

export default connect(mapStateToProps, mapDispatchToProps)(Link)
