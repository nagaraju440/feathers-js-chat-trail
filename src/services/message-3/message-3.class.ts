// For more information about this file see https://dove.feathersjs.com/guides/cli/service.class.html#database-services
import type { Params } from '@feathersjs/feathers'
import { KnexService } from '@feathersjs/knex'
import type { KnexAdapterParams, KnexAdapterOptions } from '@feathersjs/knex'

import type { Application } from '../../declarations'
import type { Message3, Message3Data, Message3Patch, Message3Query } from './message-3.schema'

export type { Message3, Message3Data, Message3Patch, Message3Query }

export interface Message3Params extends KnexAdapterParams<Message3Query> {}

// By default calls the standard Knex adapter service methods but can be customized with your own functionality.
export class Message3Service<ServiceParams extends Params = Message3Params> extends KnexService<
  Message3,
  Message3Data,
  Message3Params,
  Message3Patch
> {}

export const getOptions = (app: Application): KnexAdapterOptions => {
  return {
    paginate: app.get('paginate'),
    Model: app.get('postgresqlClient'),
    name: 'message-3'
  }
}
