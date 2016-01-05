import element from 'virtex-element'

const styles = {
  container: {
    display: 'flex'
  },
  column: {
    flex: '1'
  }
}

function initialState () {
  return {
    columns: 3,
    cards: []
  }
}

function render ({columns, children, key}) {
  const sorted = sort(children)
  return (
    <div style={styles.container}>
      {sorted.map((column) => <div style={styles.column}>{column}</div>)}
    </div>
  )
  function sort (objects) {
    return objects.reduce((arr, child, i) => {
      const c = Math.floor(i % columns)
      arr[c] = arr[c] ? [...arr[c], child] : [child]
      return arr
    }, [])
  }
}

function reducer (state, action) {
  switch (action.type) {
  }
  return state
}

export default {
  initialState,
  reducer,
  render
}
