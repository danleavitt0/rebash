import element from 'virtex-element'
import MainLayout from '../layout/mainLayout'
import Card from '../elements/card'
import Nav from '../nav'
import ColumnLayout from '../elements/columnLayout'
import Post from '../elements/post'
import {createProject, initializeApp} from '../../actions'

function beforeMount () {
  return initializeApp()
}

function render ({props, state, local}) {
  const {posts} = props
  return (
    <MainLayout nav={<Nav/>}>
      <button onClick={createProject}>Create New</button>
      {posts.map(({Name}) => <div>{Name}</div>)}
    </MainLayout>
  )
}

export default {
  beforeMount,
  render
}
