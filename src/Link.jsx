import React from 'react'
import PropTypes from 'prop-types'
import { pick } from 'lodash/fp'
import classnames from 'classnames'

const getValidProps = pick(['href', 'onClick', 'style', 'title'])
function getClassNames({ isActive, className, isInternal }) {
  return classnames({ active: isActive, internal: isInternal }, className)
}
// Really simple Link component to help transition from react-router.
function Link({ children, ...props }) {
  return (
    <a className={getClassNames(props)} {...getValidProps(props)}>
      {children}
    </a>
  )
}

Link.propTypes = {
  isActive: PropTypes.bool,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}
Link.defaultProps = {
  isActive: false,
  className: null,
}
export default Link
