import element from 'virtex-element'

const styles = {
  container: {
    backgroundColor: '#f5f5f5',
    height: '100vh'
  },
  main: {
    margin: '20px auto',
    width: '80%'
  }
}

function render ({props, state}) {
  console.log(props,state,'main layout')
  const {nav, children} = props
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
