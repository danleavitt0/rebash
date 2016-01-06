/**
 * Imports
 */

import enroute from 'enroute'
import element from 'virtex-element'
import Home from './components/pages/home'
import NotFound from './components/pages/notFound'
import Projects from './components/pages/projects'

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
  return <Home projects={props} {...props}/>
}

function notFound () {
  return <NotFound />
}

/**
 * Exports
 */

export default router
