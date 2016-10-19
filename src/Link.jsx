import React, { PropTypes } from 'react'
import classnames from 'classnames'

// Really simple Link component to help transition from react-router.
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

export default Link
