import element from 'vdom-element'
import localize from 'vdux-local'
import {merge} from '../../utils'

const styles = {
  container: {
    boxShadow: '0 0 5px 2px rgba(0,0,0,0.2)',
    backgroundColor: '#fff'
  },
  childContainer: {
    padding: '15px'
  },
  header: {
    backgroundColor: 'lightblue',
    color: 'white',
    position: 'relative',
    padding: '10px 15px',
    fontSize: '22px'
  }
}

function render ({header, children, style, link}) {
  console.log(link)
  const headerElement = typeof(header) === 'function' ?
    header : 
    <div style={styles.header}> {header} </div>
  return (
    <a href={link}>
      <div style={merge(style, styles.container)}>
        {header && headerElement}
        <div style={styles.childContainer}>
          {children}
        </div>
      </div>
    </a>
  )
}

export default render
