import React from 'react'
import PropTypes from 'prop-types'
import { flow, over, pick } from 'lodash/fp'
import classnames from 'classnames'
import { setField } from 'cape-lodash'

/* globals window */

function scrollToTop() {
  if (typeof window !== 'undefined' && window.scrollTo) window.scrollTo(0, 0)
}

function addScrollTop({ onClick, top }) {
  if (!top) return onClick
  if (!onClick) return scrollToTop
  return over([scrollToTop, onClick])
}
const getValidProps = flow(
  setField('onClick', addScrollTop),
  pick(['href', 'onClick', 'style', 'title'])
)

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
  top: PropTypes.bool,
}
Link.defaultProps = {
  isActive: false,
  className: null,
}
export default Link
