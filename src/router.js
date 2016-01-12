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

const styles = {
  all: {
    fontFamily: "'Roboto', sans-serif"
  }
}

const router = enroute({
  '/': home,
  '*': notFound
})

/**
 * Pages
 */

function home (params, props) {
  return <Home style={styles.all} projects={props} {...props}/>
}

function notFound () {
  return <NotFound style={styles.all} />
}

/**
 * Exports
 */

export default router
