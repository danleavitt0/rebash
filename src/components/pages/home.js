import element from 'vdom-element'
import MainLayout from '../layout/mainLayout'
import Nav from '../nav'

function render () {
  return (
    <MainLayout nav={<Nav />}>
      <div>Hello World</div>
    </MainLayout>
  )
}

export default render
