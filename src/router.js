/**
 * Imports
 */

import enroute from 'enroute'
import element from 'vdom-element'
import Home from './components/pages/home'
import NotFound from './components/pages/notFound'

/**
 * Routes
 */

const router = enroute({
  '/': home,
  '*': notFound
})

/**
 * Pages
 */

function home (params, props) {
  return <Home {...props} />
}

function notFound () {
  return <NotFound />
}

/**
 * Exports
 */

export default router
