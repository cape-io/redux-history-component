import { pick } from 'lodash/fp'
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const getValidProps = pick(['style', 'title', 'onClick'])
function getClassNames({ isActive, className }) {
  return classnames({ active: isActive }, className)
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
