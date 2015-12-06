import element from 'virtex-element'
import MainLayout from '../layout/mainLayout'
import Nav from '../nav'

function render () {
  return (
    <MainLayout nav={<Nav />}>
      <div>Not Found</div>
    </MainLayout>
  )
}

export default render
