/**
 * Imports
 */

import element from 'virtex-element'
import router from './router'

function render ({props}) {
  return router (props.url || '/', props)
}

/**
 * Exports
 */

export default render
