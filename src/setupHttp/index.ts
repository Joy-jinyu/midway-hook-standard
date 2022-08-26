import { setupHttpClient } from '@midwayjs/rpc'

import { ErrorHandler } from './middleware/errorHandler'

setupHttpClient({
  middleware: [ErrorHandler]
})
