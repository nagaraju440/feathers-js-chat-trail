// For more information about this file see https://dove.feathersjs.com/guides/cli/service.shared.html
import type { Params } from '@feathersjs/feathers'
import type { ClientApplication } from '../../client'
import type { Message3, Message3Data, Message3Patch, Message3Query, Message3Service } from './message-3.class'

export type { Message3, Message3Data, Message3Patch, Message3Query }

export type Message3ClientService = Pick<
  Message3Service<Params<Message3Query>>,
  (typeof message3Methods)[number]
>

export const message3Path = 'message-3'

export const message3Methods = ['find', 'get', 'create', 'patch', 'remove'] as const

export const message3Client = (client: ClientApplication) => {
  const connection = client.get('connection')

  client.use(message3Path, connection.service(message3Path), {
    methods: message3Methods
  })
}

// Add this service to the client service type index
declare module '../../client' {
  interface ServiceTypes {
    [message3Path]: Message3ClientService
  }
}
