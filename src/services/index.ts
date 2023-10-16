import { message3 } from './message-3/message-3'
import { message1 } from './message-1/message-1'
import { message } from './message/message'
// For more information about this file see https://dove.feathersjs.com/guides/cli/application.html#configure-functions
import type { Application } from '../declarations'

export const services = (app: Application) => {
  app.configure(message3)
  app.configure(message1)
  app.configure(message)
  // All services will be registered here
}
