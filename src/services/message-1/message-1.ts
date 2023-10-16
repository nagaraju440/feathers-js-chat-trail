// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html

import { hooks as schemaHooks } from '@feathersjs/schema'

import {
  message1DataValidator,
  message1PatchValidator,
  message1QueryValidator,
  message1Resolver,
  message1ExternalResolver,
  message1DataResolver,
  message1PatchResolver,
  message1QueryResolver
} from './message-1.schema'

import type { Application } from '../../declarations'
import { Message1Service, getOptions } from './message-1.class'
import { message1Path, message1Methods } from './message-1.shared'

export * from './message-1.class'
export * from './message-1.schema'

// A configure function that registers the service and its hooks via `app.configure`
export const message1 = (app: Application) => {
  // Register our service on the Feathers application
  app.use(message1Path, new Message1Service(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: message1Methods,
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service(message1Path).hooks({
    around: {
      all: [
        schemaHooks.resolveExternal(message1ExternalResolver),
        schemaHooks.resolveResult(message1Resolver)
      ]
    },
    before: {
      all: [
        schemaHooks.validateQuery(message1QueryValidator),
        schemaHooks.resolveQuery(message1QueryResolver)
      ],
      find: [],
      get: [],
      create: [
        schemaHooks.validateData(message1DataValidator),
        schemaHooks.resolveData(message1DataResolver)
      ],
      patch: [
        schemaHooks.validateData(message1PatchValidator),
        schemaHooks.resolveData(message1PatchResolver)
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
    [message1Path]: Message1Service
  }
}
