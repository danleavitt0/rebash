import element from 'vdom-element'

function render ({nav, children}) {
  return (
    <div>
      <div class='header'>
        {nav}
      </div>
      <div>
        {children}
      </div>
    </div>
  )
}

export default render
