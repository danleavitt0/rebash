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

function render ({props, state, actions}) {
  console.log(props, state, actions)
  return (
    <div>Hello</div>
  )
}

export default {
  render
}
