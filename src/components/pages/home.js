import element from 'virtex-element'
import MainLayout from '../layout/mainLayout'
import Card from '../elements/card'
import Nav from '../nav'
import ColumnLayout from '../elements/columnLayout'
import Post from '../elements/post'

const styles = {
  container: {
    display: 'flex'
  },
  card: {
    margin: '12px'
  }
}

function initialState () {
  return {
    value: ''
  }
}

function render ({props, state, local}) {
  const {posts} = props
  return (
    <MainLayout nav={<Nav/>}>
      {posts.map((post) => <div>{post.Name}</div>)}
    </MainLayout>
  )
}

function reducer (state, action) {
  return state
}

export default {
  render
}
