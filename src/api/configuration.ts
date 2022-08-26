import { createConfiguration, hooks } from '@midwayjs/hooks'
import * as web from '@midwayjs/web'
import cors from '@koa/cors'
import { join } from 'path'

/**
 * setup midway server
 */
export default createConfiguration({
  imports: [
    web,
    hooks({
      middleware: [cors()]
    })
  ],
  importConfigs: [
    join(__dirname, 'config'),
    {
      default: { keys: 'session_keys' }
    }
  ]
})
