import element from 'virtex-element'
import MainLayout from '../layout/mainLayout'
import Card from '../elements/card'
import Nav from '../nav'
import ColumnLayout from '../elements/columnLayout'
import Post from '../elements/post'
import {createProject} from '../../actions'

function render ({props, state, local}) {
  const {posts} = props
  return (
    <MainLayout nav={<Nav/>}>
      <button onClick={createProject}>Create New</button>
      {posts.map((post) => <div>{post.Name}</div>)}
    </MainLayout>
  )
}

export default {
  render
}
