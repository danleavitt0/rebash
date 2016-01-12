import element from 'virtex-element'

const styles = {
  container: {
    backgroundColor: '#f5f5f5',
    height: '100vh',
    fontFamily: 'Roboto, sans-serif'
  },
  main: {
    margin: '20px auto',
    width: '80%'
  }
}

function render ({props, state, children}) {
  const {nav} = props
  return (
    <div style={styles.container}>
      <div class='header'>
        {nav}
      </div>
      <div style={styles.main}>
        {children}
      </div>
    </div>
  )
}

export default {
  render
}
