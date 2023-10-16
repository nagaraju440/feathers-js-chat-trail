// For more information about this file see https://dove.feathersjs.com/guides/cli/client.html
import { feathers } from '@feathersjs/feathers'
import type { TransportConnection, Application } from '@feathersjs/feathers'
import authenticationClient from '@feathersjs/authentication-client'
import type { AuthenticationClientOptions } from '@feathersjs/authentication-client'

import { message3Client } from './services/message-3/message-3.shared'
export type {
  Message3,
  Message3Data,
  Message3Query,
  Message3Patch
} from './services/message-3/message-3.shared'

import { message1Client } from './services/message-1/message-1.shared'
export type {
  Message1,
  Message1Data,
  Message1Query,
  Message1Patch
} from './services/message-1/message-1.shared'

import { messageClient } from './services/message/message.shared'
export type { Message, MessageData, MessageQuery, MessagePatch } from './services/message/message.shared'

export interface Configuration {
  connection: TransportConnection<ServiceTypes>
}

export interface ServiceTypes {}

export type ClientApplication = Application<ServiceTypes, Configuration>

/**
 * Returns a typed client for the my-new-app app.
 *
 * @param connection The REST or Socket.io Feathers client connection
 * @param authenticationOptions Additional settings for the authentication client
 * @see https://dove.feathersjs.com/api/client.html
 * @returns The Feathers client application
 */
export const createClient = <Configuration = any,>(
  connection: TransportConnection<ServiceTypes>,
  authenticationOptions: Partial<AuthenticationClientOptions> = {}
) => {
  const client: ClientApplication = feathers()

  client.configure(connection)
  client.configure(authenticationClient(authenticationOptions))
  client.set('connection', connection)

  client.configure(messageClient)
  client.configure(message1Client)
  client.configure(message3Client)
  return client
}
