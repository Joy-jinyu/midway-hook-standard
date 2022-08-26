import type { Middleware } from '@midwayjs/rpc'

const ErrorHandler: Middleware = async (ctx, next) => {
  try {
    await next()
  } catch (err) {
    switch (err.status) {
      case 500:
        console.error('Internal Server Error')
        break
      default:
        console.error(`Unknown Error, status: ${err.status}`)
        break
    }
  }
}

export { ErrorHandler }
