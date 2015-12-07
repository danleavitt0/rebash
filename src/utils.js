import _ from 'lodash'

const merge = (base, ...args) => _.defaultsDeep(base, ...args)

export {
  merge
}
