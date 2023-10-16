// For more information about this file see https://dove.feathersjs.com/guides/cli/service.shared.html
import type { Params } from '@feathersjs/feathers'
import type { ClientApplication } from '../../client'
import type { Message1, Message1Data, Message1Patch, Message1Query, Message1Service } from './message-1.class'

export type { Message1, Message1Data, Message1Patch, Message1Query }

export type Message1ClientService = Pick<
  Message1Service<Params<Message1Query>>,
  (typeof message1Methods)[number]
>

export const message1Path = 'message-1'

export const message1Methods = ['find', 'get', 'create', 'patch', 'remove'] as const

export const message1Client = (client: ClientApplication) => {
  const connection = client.get('connection')

  client.use(message1Path, connection.service(message1Path), {
    methods: message1Methods
  })
}

// Add this service to the client service type index
declare module '../../client' {
  interface ServiceTypes {
    [message1Path]: Message1ClientService
  }
}
