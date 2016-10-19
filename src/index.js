import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './container'
import Link from './Link'

// Simply attaches the dispatch wrapped handleClick().
const container = connect(mapStateToProps, mapDispatchToProps)

export {
  container,
  Link,
  mapStateToProps,
  mapDispatchToProps,
}
export * from './util'
export default container(Link)
