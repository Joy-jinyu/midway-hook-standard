import { resolve } from 'path'
import alias from '../tsconfig.alias.json'
import { mapToObj } from './common'

const { paths } = alias.compilerOptions
const aliasList = Object.keys(paths).map((k) => {
  const path = paths[k]

  return {
    key: k.split('/*')[0],
    value: resolve(`${__dirname}/..`, path[0].replace('.', 'src').replace('/*', ''))
  }
})

export const resolver = {
  alias: mapToObj(aliasList)
}
