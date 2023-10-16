// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html

import { hooks as schemaHooks } from '@feathersjs/schema'

import {
  message3DataValidator,
  message3PatchValidator,
  message3QueryValidator,
  message3Resolver,
  message3ExternalResolver,
  message3DataResolver,
  message3PatchResolver,
  message3QueryResolver
} from './message-3.schema'

import type { Application } from '../../declarations'
import { Message3Service, getOptions } from './message-3.class'
import { message3Path, message3Methods } from './message-3.shared'

export * from './message-3.class'
export * from './message-3.schema'

// A configure function that registers the service and its hooks via `app.configure`
export const message3 = (app: Application) => {
  // Register our service on the Feathers application
  app.use(message3Path, new Message3Service(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: message3Methods,
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service(message3Path).hooks({
    around: {
      all: [
        schemaHooks.resolveExternal(message3ExternalResolver),
        schemaHooks.resolveResult(message3Resolver)
      ]
    },
    before: {
      all: [
        schemaHooks.validateQuery(message3QueryValidator),
        schemaHooks.resolveQuery(message3QueryResolver)
      ],
      find: [],
      get: [],
      create: [
        schemaHooks.validateData(message3DataValidator),
        schemaHooks.resolveData(message3DataResolver)
      ],
      patch: [
        schemaHooks.validateData(message3PatchValidator),
        schemaHooks.resolveData(message3PatchResolver)
      ],
      remove: []
    },
    after: {
      all: []
    },
    error: {
      all: []
    }
  })
}

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    [message3Path]: Message3Service
  }
}
