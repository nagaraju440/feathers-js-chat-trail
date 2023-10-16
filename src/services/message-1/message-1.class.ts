// For more information about this file see https://dove.feathersjs.com/guides/cli/service.class.html#database-services
import type { Params } from '@feathersjs/feathers'
import { KnexService } from '@feathersjs/knex'
import type { KnexAdapterParams, KnexAdapterOptions } from '@feathersjs/knex'

import type { Application } from '../../declarations'
import type { Message1, Message1Data, Message1Patch, Message1Query } from './message-1.schema'

export type { Message1, Message1Data, Message1Patch, Message1Query }

export interface Message1Params extends KnexAdapterParams<Message1Query> {}

// By default calls the standard Knex adapter service methods but can be customized with your own functionality.
export class Message1Service<ServiceParams extends Params = Message1Params> extends KnexService<
  Message1,
  Message1Data,
  Message1Params,
  Message1Patch
> {}

export const getOptions = (app: Application): KnexAdapterOptions => {
  return {
    paginate: app.get('paginate'),
    Model: app.get('postgresqlClient'),
    name: 'message-1'
  }
}
