import { pick } from 'lodash'
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

// Really simple Link component to help transition from react-router.
function Link({ children, className, isActive, ...props }) {
  return (
    <a
      className={classnames({ active: isActive }, className)}
      {...pick(props, 'style', 'title')}
    >
      {children}
    </a>
  )
}

Link.propTypes = {
  isActive: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
}

export default Link
