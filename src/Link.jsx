import React, { PropTypes } from 'react'
import classnames from 'classnames'

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

export default Link
