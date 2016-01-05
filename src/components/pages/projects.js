import element from 'virtex-element'
import MainLayout from '../layout/mainLayout'
import Card from '../elements/card'
import Nav from '../nav'
import Project from '../elements/project'

function render ({project}, childState) {
  return (
    <MainLayout nav={<Nav pageName={project}/>}>
      <div>
        <Project key={project} project={project}/>
      </div>
    </MainLayout>
  )
}

function reducer (state, action) {
  return state
}

export default {
  reducer,
  render
}
