
/**
 * Imports
 */

import element from 'virtex-element'

/**
 * Render
 */

const styles = {
  outer: {
    height: '64px',
    color: '#fff',
    boxShadow: '0 0 5px 2px rgba(0,0,0,0.2)',
    color: '#333',
    backgroundColor: '#fff'
  },
  inner: {
    display: 'flex',
    alignItems: 'center',
    contentAlign: 'center',
    height: '100%',
    width: '80%',
    margin: '0 auto'
  },
  title: {
    flex: '1',
    fontSize: 28
  },
  link: {
    margin: '8px',
  }
}

function render ({props, state}) {
  let {pageName} = props
  pageName = typeof(pageName) === 'string' ? pageName : 'Title'
  return (
    <div style={styles.outer}>
      <div style={styles.inner}>
        <div style={styles.title}> {pageName} </div>
        <a style={styles.link} href='/'>Home</a>
        <a style={styles.link} href='/projects'>My Projects</a>
        <a style={styles.link} href='/friends'>Friends</a>
      </div>
    </div>
  )
}

/**
 * Exports
 */

export default {
  render
}
