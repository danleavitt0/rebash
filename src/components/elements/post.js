/**
 * Imports
 */

import element from 'vdom-element'
import {fetchPosts} from '../../actions'
import Card from './card'
import localize, {localAction} from 'vdux-local'

/**
 * Before mount
 */

function beforeMount () {
  return fetchPosts()
}

/**
 * Render
 */

function render ({posts = [], loading, key}) {
  return (
    <div>
      {loading ? <div>Loading...</div> : <div>
        {
          posts.map(({Name, CreationDate}) => (
            <Card link={'/project/'+Name} header={Name}>
              <p>{CreationDate}</p>
            </Card>
          ))
        }
      </div>}
    </div>
  )

}

function reducer (state, action) {
  switch (action.type) {

  }
  return state
}

/**
 * Exports
 */

export default localize ({
  beforeMount,
  reducer,
  render
})
